/*
  js/data.js
  =================
  Schema and seed data. DO NOT MODIFY.
  Loaded into an in-memory SQLite database before your query runs.
*/

window.__SCHEMA_SQL__ = `
DROP TABLE IF EXISTS booking_item;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS fares;
DROP TABLE IF EXISTS passengers;

CREATE TABLE passengers (
  pass_id      INTEGER PRIMARY KEY,
  pass_name    TEXT NOT NULL,
  pass_email   TEXT NOT NULL,
  pass_country TEXT NOT NULL
);

CREATE TABLE fares (
  fare_id         INTEGER PRIMARY KEY,
  fare_name       TEXT NOT NULL,
  fare_base_price DECIMAL(10,2) NOT NULL,
  fare_category   TEXT NOT NULL,
  fare_stok       INTEGER NOT NULL
);

CREATE TABLE bookings (
  booking_id     INTEGER PRIMARY KEY,
  pass_id        INTEGER NOT NULL,
  booking_date   TEXT NOT NULL,
  booking_status TEXT NOT NULL
);

CREATE TABLE booking_item (
  booking_id INTEGER NOT NULL,
  fare_id    INTEGER NOT NULL,
  qty        INTEGER NOT NULL,
  sale_price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (booking_id, fare_id)
);

INSERT INTO passengers (pass_id, pass_name, pass_email, pass_country) VALUES
  (1, 'Alice Smith',    'alice.smith@example.com',    'UK'),
  (2, 'Bob Jones',      'bob.jones@example.com',      'UK'),
  (3, 'Carla Dupont',   'carla.dupont@example.com',   'France'),
  (4, 'Dieter Schmidt', 'dieter.schmidt@example.com', 'Germany'),
  (5, 'Elena Rossi',    'elena.rossi@example.com',    'Italy'),
  (6, 'Felix Mueller',  'felix.mueller@example.com',  'Germany'),
  (7, 'Greta Lopez',    'greta.lopez@example.com',    'Spain'),
  (8, 'Henri Bernard',  'henri.bernard@example.com',  'France');

INSERT INTO fares (fare_id, fare_name, fare_base_price, fare_category, fare_stok) VALUES
  (1,  'Premium Seat',          25.00, 'Seats',   100),
  (2,  'Exit Row Seat',         89.99, 'Seats',    50),
  (3,  'Aisle Reservation',     45.50, 'Seats',    75),
  (4,  'Sports Equipment',     240.00, 'Baggage',  20),
  (5,  'First Class Upgrade',  480.00, 'Baggage',  10),
  (6,  'Lounge Access',         65.00, 'Lounge',   40),
  (7,  'Snack Pack',             8.50, 'Meals',   200),
  (8,  'Hot Meal',              15.00, 'Meals',   150),
  (9,  'Window Seat',           55.00, 'Seats',    60),
  (10, 'Cabin Bag (extra)',     35.00, 'Baggage',  80);

INSERT INTO bookings (booking_id, pass_id, booking_date, booking_status) VALUES
  ( 1, 1, '2024-03-15', 'completed'),
  ( 2, 2, '2024-05-20', 'completed'),
  ( 3, 3, '2024-02-10', 'completed'),
  ( 4, 4, '2024-07-08', 'completed'),
  ( 5, 5, '2024-09-12', 'completed'),
  ( 6, 6, '2024-11-05', 'pending'),
  ( 7, 7, '2024-04-22', 'completed'),
  ( 8, 8, '2024-08-30', 'completed'),
  ( 9, 1, '2024-12-01', 'completed'),
  (10, 3, '2024-06-15', 'completed'),
  (11, 4, '2024-01-10', 'completed'),
  (12, 5, '2023-12-20', 'completed'),
  (13, 6, '2025-01-05', 'completed'),
  (14, 7, '2024-10-15', 'cancelled'),
  (15, 8, '2024-09-25', 'completed'),
  (16, 2, '2024-11-20', 'pending');

INSERT INTO booking_item (booking_id, fare_id, qty, sale_price) VALUES
  -- Booking 1 (UK, Alice, completed, 2024-03-15)
  ( 1, 1, 2,  25.00),
  ( 1, 2, 1,  89.99),
  -- Booking 2 (UK, Bob, completed, 2024-05-20)
  ( 2, 4, 1, 240.00),
  ( 2, 10, 2, 35.00),
  -- Booking 3 (France, Carla, completed, 2024-02-10)
  ( 3, 5, 1, 480.00),
  ( 3, 3, 1,  45.50),
  -- Booking 4 (Germany, Dieter, completed, 2024-07-08)
  ( 4, 2, 3,  89.99),
  ( 4, 9, 1,  55.00),
  -- Booking 5 (Italy, Elena, completed, 2024-09-12)
  ( 5, 4, 1, 240.00),
  ( 5, 5, 1, 480.00),
  ( 5, 9, 1,  55.00),
  -- Booking 6 (Germany, Felix, PENDING, excluded)
  ( 6, 2, 1,  89.99),
  ( 6, 8, 2,  15.00),
  -- Booking 7 (Spain, Greta, completed, 2024-04-22)
  ( 7, 1, 5,  25.00),
  ( 7, 2, 5,  89.99),
  ( 7, 3, 1,  45.50),
  -- Booking 8 (France, Henri, completed, 2024-08-30)
  ( 8, 5, 1, 480.00),
  -- Booking 9 (UK, Alice, completed, 2024-12-01)
  ( 9, 4, 2, 240.00),
  ( 9, 5, 1, 480.00),
  -- Booking 10 (France, Carla, completed, 2024-06-15)
  (10, 4, 1, 240.00),
  (10, 7, 4,   8.50),
  (10, 8, 2,  15.00),
  -- Booking 11 (Germany, Dieter, completed, 2024-01-10)
  (11, 5, 1, 480.00),
  (11, 4, 1, 240.00),
  (11, 10, 2, 35.00),
  -- Booking 12 (Italy, Elena, completed, 2023, excluded)
  (12, 2, 1,  89.99),
  (12, 9, 1,  55.00),
  -- Booking 13 (Germany, Felix, completed, 2025, excluded)
  (13, 5, 1, 480.00),
  -- Booking 14 (Spain, Greta, CANCELLED, excluded)
  (14, 4, 1, 240.00),
  -- Booking 15 (France, Henri, completed, 2024-09-25)
  (15, 6, 1,  65.00),
  (15, 9, 1,  55.00),
  (15, 10, 1, 35.00),
  -- Booking 16 (UK, Bob, PENDING, excluded)
  (16, 2, 1,  89.99);
`;
