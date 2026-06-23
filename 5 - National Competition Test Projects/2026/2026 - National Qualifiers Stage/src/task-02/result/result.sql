/* ============================================================
 * Task 02 — Revenue by Country
============================================================ */
/* ------------------------------------------------------------
 * v1 — LIKE on YYYY-MM-DD prefix
 *
The booking_date column is TEXT in fixed YYYY-MM-DD format, so a prefix match on '2024-%' matches exactly the rows in the year 2024.
 * ------------------------------------------------------------ */
SELECT
  p.pass_country,
  ROUND(SUM(bi.qty * bi.sale_price), 2) AS total_revenue
FROM
  passengers p
  JOIN bookings b ON b.pass_id = p.pass_id
  JOIN booking_item bi ON bi.booking_id = b.booking_id
WHERE
  b.booking_status = 'completed'
  AND b.booking_date LIKE '2024-%'
GROUP BY
  p.pass_country
HAVING
  SUM(bi.qty * bi.sale_price) > 1000
ORDER BY
  total_revenue DESC,
  p.pass_country ASC;

/* ------------------------------------------------------------
 * v2 — BETWEEN (inclusive date range)
 *
 * Reads as a date range. Bbecause booking_date is fixed-width YYYY-MM-DD text, so '2024-12-31' is the lexicographic max for the year.
 * ------------------------------------------------------------ */
SELECT
  p.pass_country,
  ROUND(SUM(bi.qty * bi.sale_price), 2) AS total_revenue
FROM
  passengers p
  JOIN bookings b ON b.pass_id = p.pass_id
  JOIN booking_item bi ON bi.booking_id = b.booking_id
WHERE
  b.booking_status = 'completed'
  AND b.booking_date BETWEEN '2024-01-01' AND '2024-12-31'
GROUP BY
  p.pass_country
HAVING
  SUM(bi.qty * bi.sale_price) > 1000
ORDER BY
  total_revenue DESC,
  p.pass_country ASC;

/* ------------------------------------------------------------
 * v3 — CTE: aggregate first, filter / round / sort after
 *
 * Same logic as v1 but pre-aggregates per country in a CTE then applies the >1000 threshold as a plain WHERE on the derived table (no HAVING needed). More verbose, but separates "compute totals" from "pick / present them".
 * ------------------------------------------------------------ */
WITH
  revenue_per_country AS (
    SELECT
      p.pass_country,
      SUM(bi.qty * bi.sale_price) AS total_revenue
    FROM
      passengers p
      JOIN bookings b ON b.pass_id = p.pass_id
      JOIN booking_item bi ON bi.booking_id = b.booking_id
    WHERE
      b.booking_status = 'completed'
      AND b.booking_date LIKE '2024-%'
    GROUP BY
      p.pass_country
  )
SELECT
  pass_country,
  ROUND(total_revenue, 2) AS total_revenue
FROM
  revenue_per_country
WHERE
  total_revenue > 1000
ORDER BY
  total_revenue DESC,
  pass_country ASC;