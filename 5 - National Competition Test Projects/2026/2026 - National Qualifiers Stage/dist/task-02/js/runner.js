/*
  js/runner.js
  =================
  Live SQL fiddle. Reads the query from the on-page editor, runs it against an
  in-memory SQLite database, and diffs against the expected result on every
  keystroke. DO NOT MODIFY.
*/

(function () {
  const EPSILON = 0.005;
  const DEBOUNCE_MS = 250;

  let SQL = null;
  let db = null;
  let initialised = false;
  let debounceTimer = null;

  function $(id) {
    return document.getElementById(id);
  }

  function el(tag, props, children) {
    const node = document.createElement(tag);
    if (props) Object.assign(node, props);
    if (children) {
      for (const c of children) {
        node.appendChild(
          typeof c === 'string' ? document.createTextNode(c) : c
        );
      }
    }
    return node;
  }

  function renderTable(target, columns, rows, emptyMessage) {
    target.innerHTML = '';
    if (!rows.length) {
      target.appendChild(
        el('p', { className: 'muted' }, [emptyMessage || '(no rows)'])
      );
      return;
    }
    const table = el('table');
    const thead = el('thead');
    const tr = el('tr');
    columns.forEach((c) => tr.appendChild(el('th', { textContent: c })));
    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = el('tbody');
    rows.forEach((r) => {
      const row = el('tr');
      columns.forEach((c) => {
        const v = r[c];
        row.appendChild(el('td', { textContent: v == null ? '' : String(v) }));
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    target.appendChild(table);
  }

  function valuesEqual(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return Math.abs(a - b) < EPSILON;
    }
    return a === b;
  }

  function rowsEqual(actualRows, actualColumns, expectedRows, expectedColumns) {
    if (actualRows.length !== expectedRows.length) return false;
    if (actualColumns.length !== expectedColumns.length) return false;
    for (let i = 0; i < actualRows.length; i++) {
      for (let j = 0; j < expectedColumns.length; j++) {
        const expectedVal = expectedRows[i][expectedColumns[j]];
        const actualVal = actualRows[i][actualColumns[j]];
        if (!valuesEqual(actualVal, expectedVal)) return false;
      }
    }
    return true;
  }

  function setBadge(state, text) {
    const badge = $('verdict');
    badge.textContent = text;
    badge.className = 'badge ' + state;
  }

  function showError(msg) {
    const e = $('error');
    e.textContent = msg;
    e.classList.add('visible');
  }

  function clearError() {
    const e = $('error');
    e.textContent = '';
    e.classList.remove('visible');
  }

  function execute() {
    if (!initialised) return;

    const query = $('sqlEditor').value.trim();
    clearError();

    if (!query) {
      $('actualTable').innerHTML = '<p class="muted">(empty query)</p>';
      setBadge('idle', 'Ready');
      return;
    }

    let actualRows = [];
    let actualColumns = [];
    try {
      const result = db.exec(query);
      if (result.length) {
        actualColumns = result[0].columns;
        actualRows = result[0].values.map((vals) => {
          const obj = {};
          actualColumns.forEach((c, i) => (obj[c] = vals[i]));
          return obj;
        });
      }
    } catch (err) {
      showError('Query error: ' + err.message);
      setBadge('fail', 'FAIL');
      return;
    }

    const expected = window.__EXPECTED__ || { columns: [], rows: [] };
    renderTable(
      $('actualTable'),
      actualColumns.length ? actualColumns : expected.columns,
      actualRows
    );

    const passed = rowsEqual(
      actualRows,
      actualColumns,
      expected.rows,
      expected.columns
    );
    setBadge(passed ? 'pass' : 'fail', passed ? 'PASS' : 'FAIL');
  }

  function scheduleExecute() {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(execute, DEBOUNCE_MS);
  }

  async function init() {
    const editor = $('sqlEditor');
    const expected = window.__EXPECTED__ || { columns: [], rows: [] };
    renderTable($('expectedTable'), expected.columns, expected.rows);

    if (typeof initSqlJs !== 'function') {
      showError('sql.js failed to load. Check the lib/sql.js path.');
      setBadge('fail', 'FAIL');
      return;
    }

    try {
      SQL = await initSqlJs();
    } catch (err) {
      showError('Failed to initialise sql.js: ' + err.message);
      setBadge('fail', 'FAIL');
      return;
    }

    db = new SQL.Database();
    try {
      db.run(window.__SCHEMA_SQL__);
    } catch (err) {
      showError('Schema load error: ' + err.message);
      setBadge('fail', 'FAIL');
      return;
    }

    if (window.__QUERY__) editor.value = window.__QUERY__.trim();

    editor.addEventListener('input', scheduleExecute);
    $('resetBtn').addEventListener('click', () => {
      editor.value = (window.__QUERY__ || '').trim();
      execute();
    });
    $('saveBtn').addEventListener('click', saveSql);

    initialised = true;
    execute();
  }

  // ---------- Save SQL ----------

  let resultDirHandle = null;

  function showSaveStatus(message, isError) {
    const node = $('saveStatus');
    node.textContent = message;
    node.classList.toggle('error-text', !!isError);
    node.hidden = false;
    setTimeout(() => {
      node.hidden = true;
    }, 4000);
  }

  async function ensureResultDir() {
    if (resultDirHandle) {
      try {
        const perm = await resultDirHandle.queryPermission({
          mode: 'readwrite',
        });
        if (perm === 'granted') return resultDirHandle;
        const req = await resultDirHandle.requestPermission({
          mode: 'readwrite',
        });
        if (req === 'granted') return resultDirHandle;
      } catch (_) {
        // fall through and re-prompt
      }
    }
    if (!window.showDirectoryPicker) return null;
    resultDirHandle = await window.showDirectoryPicker({
      id: 'stage-2-task-02-result',
      mode: 'readwrite',
      startIn: 'documents',
    });
    return resultDirHandle;
  }

  async function saveSql() {
    const sql = $('sqlEditor').value;
    try {
      const dir = await ensureResultDir();
      if (dir) {
        const fileHandle = await dir.getFileHandle('result.sql', {
          create: true,
        });
        const writable = await fileHandle.createWritable();
        await writable.write(sql);
        await writable.close();
        showSaveStatus('Saved → ' + dir.name + '/result.sql');
        return;
      }
    } catch (err) {
      if (err.name === 'AbortError') return;
      console.error(err);
      showSaveStatus(
        'Could not write to folder — falling back to download.',
        true
      );
    }
    // Fallback: download via blob
    const blob = new Blob([sql], { type: 'application/sql;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'result.sql';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    showSaveStatus('Downloaded result.sql — move it into the result/ folder.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
