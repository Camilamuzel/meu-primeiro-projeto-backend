const express = require("express")
const router = express.Router()


const app = express ()
const porta = 3332

const mulheres = [
    {nome: 'Taliana Destro',
    imagem: "https://twitter.com/DestroTali/status/1760078273583944045/photo/1", 
    minibio: "Quadrinista e Ilustradora"
    },
    {
        nome:'Camila Muzel da Paixão',
        imagem: "https://br.freepik.com/fotos-gratis/girafa-na-selva_11011915.htm#fromView=search&page=1&position=12&uuid=21631df6-a62a-4806-8de8-584b0b86fd60",
    minibio: 'Musicista artista sagitariana' 
},
{
    nome:"Bebel Paixão",
imagem: "https://br.freepik.com/fotos-gratis/fruta-de-abacaxi_1123681.htm#query=abacaxi&position=1&from_view=keyword&track=sph&uuid=4a031867-1cea-4ca1-a1d8-61e93ebd4523",
minibio: "minha irmã" }

]

function mostraMulheres(reaquest, response) {
 response.json(mulheres)
}
function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)