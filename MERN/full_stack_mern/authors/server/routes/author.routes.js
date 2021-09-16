const AuthorsController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorsController.findAllAuthors);
    app.get('/api/authors/:id', AuthorsController.findAuthor);
    app.post('/api/authors/new', AuthorsController.createAuthor);
    app.patch('/api/authors/:id/update', AuthorsController.updateAuthor);
    app.delete('/api/authors/:id/delete', AuthorsController.deleteAuthor)
}