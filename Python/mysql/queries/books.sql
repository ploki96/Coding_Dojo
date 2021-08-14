INSERT INTO books_schema.authors(first_name, last_name) VALUES ('Jane', 'Austen'), ('Emily', 'Dickinson'), ('Fyodor', 'Dostoevsky'), ('William', 'Shakespeare'), ('Lau', 'Tzu');
INSERT INTO books_schema.books(title, num_of_pages) VALUES ('C Sharp', 100), ('Java', 200), ('Python', 300), ('PHP', 400), ('Ruby', 250);
UPDATE books_schema.books SET title = 'C#' WHERE id=1;
UPDATE books_schema.authors SET first_name = 'Bill' WHERE id=4;
INSERT INTO books_schema.favorites(author_id, book_id) VALUES (1, 1), (1, 2);
INSERT INTO books_schema.favorites(author_id, book_id) VALUES (2, 1), (2, 2), (2, 3);
INSERT INTO books_schema.favorites(author_id, book_id) VALUES (3, 1), (3, 2), (3, 3), (3, 4);
INSERT INTO books_schema.favorites(author_id, book_id) VALUES (4, 1), (4, 2), (4, 3), (4, 4), (4, 5);
SELECT * FROM books_schema.authors JOIN books_schema.favorites ON books_schema.authors.id = books_schema.favorites.author_id WHERE books_schema.favorites.book_id = 3;
DELETE FROM books_schema.favorites WHERE book_id = 3 AND author_id = 2;
INSERT INTO books_schema.favorites(author_id, book_id) VALUES (5, 2);
SELECT * FROM books_schema.books JOIN books_schema.favorites ON books_schema.books.id = books_schema.favorites.book_id WHERE books_schema.favorites.author_id = 3;
SELECT * FROM books_schema.authors JOIN books_schema.favorites ON books_schema.authors.id = books_schema.favorites.author_id WHERE books_schema.favorites.book_id = 5;

