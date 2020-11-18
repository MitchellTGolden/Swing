const {urlencoded} = require('express');

require('dotenv').config();

const express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT,
    cookieParser = require('cookie-parser'),
    server = app.listen(port, () => console.log(`Listening on port ${port}`))
    // io = require('socket.io')(server);

app.use(cookieParser());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({extended: true}));cors();

// const chats = [];

// io.on('connection', socket => {
//     console.log(socket.id);

//     socket.broadcast.emit("joined","another client joined the chat");

//     socket.on("addToChat",data => {
//         socket.emit("sent","You send a message");
//         chats.push(data);

//         io.emit("updatingMessages",chats);
//     })
// })

require('./server/config/jwt.config');
require('./server/config/db.config');

require('./server/routes/swing.routes')(app);
require('./server/routes/auth.routes')(app);

