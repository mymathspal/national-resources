/*
  js/functions.js
  =================
  Implement the five helper functions below. Function names must match
  exactly (case-sensitive) — the harness looks them up by name.
*/

/**
 * Capitalises the first letter of each word, lowercasing the rest.
 */
const capitalize = (str) => {
  // ---------- Place your code here ----------
};

/**
 * Constrains a number between a minimum and maximum.
 */
const clamp = (value, min, max) => {
  // ---------- Place your code here ----------
};

/**
 * Returns a new array with duplicates removed, preserving first-occurrence order.
 */
const unique = (arr) => {
  // ---------- Place your code here ----------
};

/**
 * Returns the sum of the digits of an integer (negative numbers use absolute value).
 */
const digitSum = (n) => {
  // ---------- Place your code here ----------
};

/**
 * Splits an array into chunks of the given size. The last chunk may be shorter.
 */
const chunk = (arr, size) => {
  // ---------- Place your code here ----------
};

// Make functions available to the test harness — do not modify
if (typeof window !== 'undefined') {
  window.capitalize = capitalize;
  window.clamp = clamp;
  window.unique = unique;
  window.digitSum = digitSum;
  window.chunk = chunk;
}
