SELECT "c"."firstName" AS "First Name",
       "c"."lastName" AS "Last Name"
  FROM "customers" AS "c"
  JOIN "rentals" USING ("customerId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films" USING ("filmId")
 WHERE "films"."title" = 'Magic Mallrats';
