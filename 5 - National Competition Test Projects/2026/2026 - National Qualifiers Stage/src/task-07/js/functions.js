/*
  js/functions.js
  =================
*/

/**
 * Capitalises the first letter of each word, lowercasing the rest.
 */
const capitalize = (str) => {
  if (typeof str !== 'string' || !str.trim()) return '';
  return str
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Constrains a number between a minimum and maximum.
 */
const clamp = (value, min, max) => {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  if (n < min) return min;
  if (n > max) return max;
  return n;
};

/**
 * Returns a new array with duplicates removed, preserving first-occurrence order.
 */
const unique = (arr) => {
  if (!Array.isArray(arr)) return [];
  const seen = new Set();
  const out = [];
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      out.push(item);
    }
  }
  return out;
};

/**
 * Returns the sum of the digits of an integer (negative numbers use absolute value).
 */
const digitSum = (n) => {
  const num = Math.abs(Number(n));
  if (!Number.isInteger(num)) return 0;
  return String(num)
    .split('')
    .reduce((acc, ch) => acc + Number(ch), 0);
};

/**
 * Splits an array into chunks of the given size. The last chunk may be shorter.
 */
const chunk = (arr, size) => {
  if (!Array.isArray(arr) || !Number.isInteger(size) || size < 1) return [];
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
};

// Make functions available to the test harness
if (typeof window !== 'undefined') {
  window.capitalize = capitalize;
  window.clamp = clamp;
  window.unique = unique;
  window.digitSum = digitSum;
  window.chunk = chunk;
}
