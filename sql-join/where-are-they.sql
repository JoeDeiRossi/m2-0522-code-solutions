SELECT "a"."line1" AS "address",
       "cities"."name" AS "city",
       "a"."district" AS "district",
       "countries"."name" as "country"
FROM "addresses" AS "a"
JOIN "cities" USING ("cityId")
JOIN "countries" USING ("countryId");
