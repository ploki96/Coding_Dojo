const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:_id', JokesController.findJoke);
    app.post('/api/jokes/new', JokesController.createJoke);
    app.patch('/api/jokes/:_id/update', JokesController.updateJoke);
    app.delete('/api/jokes/:_id/delete', JokesController.deleteJoke)
}
// update joke
// delete joke
