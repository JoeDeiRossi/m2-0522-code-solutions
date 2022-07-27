SELECT "films"."releaseYear" AS "release year",
       "genres"."name" AS "genre"
  FROM "films"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
 WHERE "films"."title" = 'Boogie Amelie';
