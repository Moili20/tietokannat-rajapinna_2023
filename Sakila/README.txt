SAKILA

A) select * from language order by name;

B)SELECT title FROM actor JOIN film_actor ON actor.actor_id=film_actor.actor_id
   JOIN film ON film_actor.film_id=film.film_id WHERE last_name='Temple';

C) SELECT first_name, last_name FROM actor
   JOIN film_actor ON actor.actor_id=film_actor.actor_id
   JOIN film ON film_actor.film_id=film.film_id WHERE title='Ghost Groundhog';

D) SELECT category, COUNT(*) AS Montako FROM film_list
   where category = 'Horror';

E) SELECT title FROM film_list WHERE category = 'Horror';