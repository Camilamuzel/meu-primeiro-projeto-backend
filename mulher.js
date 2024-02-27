const express = require("express")
const router = express.Router () 


const app = express ()
const porta = 3333

function mostraMulher(request, response) { 
    response.json({
        nome: "Taliana Destro", 
        imagem: "https://twitter.com/DestroTali/status/1760078273583944045/photo/1",
        minibio: "Quadrinista, Ilustradora, Animadora"
    })
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)
