SELECT "c"."firstName" AS "firstName",
       "c"."lastName" AS "lastName",
       SUM("payments"."amount") AS "totalSpent"
  FROM "customers" AS "c"
  JOIN "payments" USING ("customerId")
GROUP BY "c"."customerId"
ORDER BY "totalSpent" DESC;
