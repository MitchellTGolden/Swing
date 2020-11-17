const SwingController = require('../controllers/swing.controller');

module.exports = (app) => {
    app.get('/games', SwingController.gameIndex);
    app.get('/users', SwingController.userIndex);
    app.post('/swing/game/create', SwingController.gameCreate);
    app.post('/swing/user/create', SwingController.userCreate);
    app.get('/swing/game/:id', SwingController.userShow);
    app.get('/swing/user/:id', SwingController.gameShow);
    app.put('/swing/update/:id', SwingController.update);
    app.delete('/swing/game/delete/:id', SwingController.gameDestroy);
    app.delete('/swing/user/delete/:id', SwingController.userDestroy);
    app.get('/swing/addptog/:userId/:gameId/:player', SwingController.addPlayerToGame)


}