//Módulos NPM
const express = require('express')
const cors = require('cors')

//Módulo de rotas
const routes = require('./routes.js')

//Método (função) do express
const app = express()
const port = 3000

//Midllewares
app.use(cors())
app.use(express.json())

//Indicando localização de arquivo de rotas
app.use(routes)

//Subindo o servidor
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})