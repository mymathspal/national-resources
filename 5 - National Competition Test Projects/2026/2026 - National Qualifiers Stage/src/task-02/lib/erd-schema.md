# Task 02 — Südwest schema (for ERD redesign)

This is the authoritative schema reflected in `js/data.js`. Use it to redraw `task-02-erd.jpg`.
The same dataset is used by Task 09 (its ERD should mirror this).

## Tables

### passengers

| Column       | Type    | Key | Notes |
| ------------ | ------- | --- | ----- |
| pass_id      | INTEGER | PK  |       |
| pass_name    | TEXT    |     |       |
| pass_email   | TEXT    |     |       |
| pass_country | TEXT    |     |       |

### fares

| Column          | Type          | Key | Notes                                  |
| --------------- | ------------- | --- | -------------------------------------- |
| fare_id         | INTEGER       | PK  |                                        |
| fare_name       | TEXT          |     |                                        |
| fare_base_price | DECIMAL(10,2) |     |                                        |
| fare_category   | TEXT          |     | enum: Seats · Baggage · Lounge · Meals |
| fare_stok       | INTEGER       |     |                                        |

### bookings

| Column         | Type    | Key | Notes                                 |
| -------------- | ------- | --- | ------------------------------------- |
| booking_id     | INTEGER | PK  |                                       |
| pass_id        | INTEGER | FK  | → passengers.pass_id                  |
| booking_date   | TEXT    |     | format `YYYY-MM-DD`                   |
| booking_status | TEXT    |     | enum: completed · pending · cancelled |

### booking_item

| Column     | Type          | Key     | Notes                               |
| ---------- | ------------- | ------- | ----------------------------------- |
| booking_id | INTEGER       | PK + FK | composite PK; → bookings.booking_id |
| fare_id    | INTEGER       | PK + FK | composite PK; → fares.fare_id       |
| qty        | INTEGER       |         |                                     |
| sale_price | DECIMAL(10,2) |         |                                     |

## Relationships

- `passengers (1) ── (∞) bookings` (one passenger has many bookings)
- `bookings (1) ── (∞) booking_item` (one booking has many line items)
- `fares (1) ── (∞) booking_item` (one fare can appear on many booking items)
- `bookings ── booking_item ── fares` is many-to-many through `booking_item`

## Notes for the ERD

- Composite primary key on `booking_item (booking_id, fare_id)` — show as PK/FK on both columns.
- Tables to draw: **PASSENGERS**, **FARES**, **BOOKINGS**, **BOOKING_ITEM**.
- Arrows / crow's-feet:
  - PASSENGERS → BOOKINGS (1:N on `pass_id`)
  - BOOKINGS → BOOKING_ITEM (1:N on `booking_id`)
  - FARES → BOOKING_ITEM (1:N on `fare_id`)
- Theme: Südwest, a startup German airline (South-West Germany). Use airline-style branding if any.
