const express = require("express");
const socket = require("socket.io");


const PORT = 5000

const app = express()

const server = app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})
let users = []

const io = socket(server)

io.on('connection', (socket)=> {
    io.emit('join')
    

    socket.on('joined', (user) => {
        users.push(user)
    })

    socket.on('userRoom', (user) => {
        for (let i of users) {
            if (user.id === i.id) {
                console.log(`${i.name} já está na sala`)
            } else {
                users.push(user)
            }
   
        }
   
        console.log(`${user.name} se conectou na sala ${user.room} => (${user.id})`)
    })

    socket.on('disconnected', (user) => {
        console.log(users)
        console.log(`${user.name} se desconectou da sala ${user.room}`)
    })

    socket.on('disconnect', () => {
        io.emit('disc')
    })



})