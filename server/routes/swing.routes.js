const SwingController = require('../controllers/swing.controller');

module.exports = (app) => {
    app.get('/games', SwingController.gameIndex);
    app.get('/users', SwingController.userIndex);
    app.post('/swing/game/create', SwingController.gameCreate);
    app.post('/swing/user/create', SwingController.userCreate);
    app.get('/swing/game/:id', SwingController.gameShow);
    app.get('/swing/user/:id', SwingController.userShow);
    app.put('/swing/game/update/:id', SwingController.gameUpdate);
    app.put('/swing/user/update/:id', SwingController.userUpdate);
    app.delete('/swing/game/delete/:id', SwingController.gameDestroy);
    app.delete('/swing/user/delete/:id', SwingController.userDestroy);
    app.get('/swing/addptog/:userId/:gameId/:player', SwingController.addPlayerToGame)

}