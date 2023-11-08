const WebSocket = require("ws");
const express = require("express");
const app = express()
const path = require("path")

app.use(express.static(path.resolve(__dirname, "./client")))

const myServer = app.listen(8000)

const wsServer = new WebSocket.Server({ server: myServer })


wsServer.on("connection", function (ws) {    // what should a websocket do on connection

    ws.on("message", function (msg) {        // what to do on message event
        wsServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {     // check if client is ready
                client.send('Сервер получил сообщение и ответил');
            }
        })
    })
})