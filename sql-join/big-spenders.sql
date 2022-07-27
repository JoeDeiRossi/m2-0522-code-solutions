SELECT "p"."amount" AS "amount",
       "c"."firstName" AS "firstName",
       "c"."lastName" AS "lastName"
  FROM "payments" AS "p"
  JOIN "customers" AS "c" USING ("customerId")
ORDER BY "amount" desc
 LIMIT 10;
