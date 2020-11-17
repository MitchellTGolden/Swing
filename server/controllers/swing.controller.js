const { Game } = require('../models/game.model');
const { User } = require('../models/game.model');

module.exports = {
    userIndex:(req,res) => {
        User.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    gameIndex:(req,res) => {
        Game.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    userShow: (req,res) => {
        User.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    gameShow: (req,res) => {
        Game.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    userCreate:(req,res) => {
        User.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    gameCreate:(req,res) => {    
        Game.create(req.body)
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))
    },
    // gameCreate:(req,res) => {    
    //     let player1 = User.findOne({name: name1})
    //     let player2 = User.findOne({name: name2})
    //     Game.create(req.body, player1, player2})
    //     .then(data => res.json({results:data}))
    //     .catch(err => res.json(err.errors))
    // },
    update:(req,res) => {
        Game.findOneAndUpdate({_id: req.params.id}, req.body, {useFindAndModify:true, runValidators:true})  
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    userDestroy:(req,res) => {
        User.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    gameDestroy:(req,res) => {
        Game.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    addPlayerToGame:(req,res) => {
        User.findOne({_id: req.params.userId})
            .then(data => {
                Game.findOneAndUpdate({_id: req.params.gameId}, {[req.params.player] :{user:data}})
                    .then(data => res.json({results:data}))
            })
    }
}