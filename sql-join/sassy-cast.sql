SELECT "a"."firstName" AS "First Name",
       "a"."lastName" AS "Last Name"
FROM "actors" AS "a"
JOIN "castMembers" USING ("actorId")
JOIN "films" USING ("filmId")
WHERE "films"."title" = 'Jersey Sassy';
