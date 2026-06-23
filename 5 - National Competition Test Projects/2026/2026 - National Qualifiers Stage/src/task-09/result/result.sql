SELECT fare_id, fare_name, fare_base_price
FROM fares
WHERE fare_category = 'Seats'
  AND fare_base_price < 500
ORDER BY fare_base_price ASC;
