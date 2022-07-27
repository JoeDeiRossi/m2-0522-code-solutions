SELECT "genres"."name" AS "genre",
       COUNT("castMembers".*) AS "numberOfFilms"
  FROM "genres"
  JOIN "filmGenre" USING ("genreId")
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" USING ("actorId")
 WHERE "actors"."firstName" = 'Lisa'
   AND "actors"."lastName" = 'Monroe'
GROUP BY "genre";
