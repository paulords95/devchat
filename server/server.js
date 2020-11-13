const express = require("express");
const socket = require("socket.io");


const PORT = 5000

const app = express()

const server = app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})

const users = []

const io = socket(server)

io.on('connection', (socket)=> {
    io.emit('usuario entrou')
    

    socket.on('join', (user) => {
        users.push(user)
        console.log(`${user} entrou`)
        io.emit('joined', `${user} entrou`)
    })


    socket.on('disconnect', ()=> {
        console.log('Usuário desconectou')
    })


})