TRUNCATE TABLE users_schema.users;
INSERT INTO users_schema.users(first_name, last_name, email) VALUES ('Tim', 'Wang', 'timwang@codingdojo.com'), ('Jordan', 'Gilberg', 'jordangilberg@codingdojo.com'), ('Justin', 'Shin', 'JustinShin@codingdojo.com');
SELECT * FROM users_schema.users;
SELECT * FROM users_schema.users WHERE email = 'timwang@codingdojo.com';
SELECT * FROM users_schema.users WHERE id = 3;
UPDATE users_schema.users SET last_name = "Pancakes" WHERE users.id = 3;
DELETE FROM users_schema.users WHERE users.id = 2;
SELECT * FROM users_schema.users ORDER BY first_name DESC;