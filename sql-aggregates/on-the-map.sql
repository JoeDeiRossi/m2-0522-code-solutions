SELECT "countries"."name" AS "country",
       COUNT("cities".*) AS "numberOfCities"
  FROM "countries"
  JOIN "cities" USING ("countryId")
GROUP BY "countries"."countryId";
