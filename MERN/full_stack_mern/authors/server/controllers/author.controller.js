console.log('I am in the controller')
const Authors = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
    Authors.find({}).sort({name:1})
        .then(allAuthors => res.json({ results:allAuthors}))
        .catch(err => res.json({ message: 'error on find all authors', err }));
}

module.exports.findAuthor = (req, res) => {
    Authors.findOne({ _id: req.params.id})
        .then(singleAuthor => res.json({results:singleAuthor}))
        .catch(err => res.json({ message: 'could not find specific author', err}))
}

module.exports.createAuthor = (req, res) => {
    // Authors.find({name: req.body.name}).then((user => {
    //     console.log('user ' + req.body.name )
    //     console.log('user.name ' + user )
    //     if (user.count < 1){
        Authors.create(req.body)
            .then(author => res.json({ results:author}))
            .catch(err => res.json({ message: 'could not create author', err }));
        // }
        // else {
        //     console.log('else statement')
        //     res.json({err: {errors: {message: "Name must be Unique"}}})
        // }
    }
//     ))
// }

module.exports.updateAuthor = (req, res) => {
    Authors.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true})
        .then(singleAuthor => res.json({results:singleAuthor}))
        .catch(err => res.json({ message: 'could not update specific author', err}))
}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({_id: req.params.id})
        .then(deletedAuthor => res.json({results: deletedAuthor}))
        .catch(err => res.json({message: 'could not delete this author', err}))
}
