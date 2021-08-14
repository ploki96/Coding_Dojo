INSERT INTO dojos_and_ninjas_schema.dojos (name) VALUES ('Austin'), ('New York'), ('Seattle');
DELETE FROM dojos_and_ninjas_schema.dojos WHERE id > 0;
INSERT INTO dojos_and_ninjas_schema.dojos (name) VALUES ('Austin'), ('New York'), ('Seattle');
INSERT INTO dojos_and_ninjas_schema.ninjas (first_name, last_name, age, dojo_id) VALUES ('Tim', 'Wang', 25, 4), ('Jordan', 'Gilberg', 26, 4), ('Justin', 'Shin', 23, 4);
INSERT INTO dojos_and_ninjas_schema.ninjas (first_name, last_name, age, dojo_id) VALUES ('Tyler', 'Desousa', 21, 5), ('Shahbaz', 'Mughal', 23, 5), ('Olja', 'Siforjia', 26, 5);
INSERT INTO dojos_and_ninjas_schema.ninjas (first_name, last_name, age, dojo_id) VALUES ('Felix', 'A', 25, 6), ('Christian', 'Durrett', 23, 6), ('Tabi', 'Cooley', 29, 6);
SELECT * FROM dojos_and_ninjas_schema.ninjas WHERE dojo_id = 4;
SELECT * FROM dojos_and_ninjas_schema.ninjas WHERE dojo_id = 6;
SELECT dojo_id FROM dojos_and_ninjas_schema.ninjas WHERE id = 9;