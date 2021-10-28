const express = require('express')
const routes = express.Router()
//#region Reading CSV file and creating an array of objects
const csv = require('csv-parser')
const fs = require('fs')
const path = require('path');
let dataBase
require('./csvRead.js')().then(data => {
    dataBase = data
})
// setTimeout(() => {
//     console.log(csv);
// }, 2000);
//#endregion
const arrayOfBrands = [
    {
        pontos:0,
        nome:"LEFFE BLONDE"
    },
    {
        pontos:0,
        nome:"TRIPLE KARMELIET"
    },
    {
        pontos:0,
        nome:"GOOSE"
    },
    {
        pontos:0,
        nome:"HOEGAARDEN WHITE"
    },
    {
        pontos:0,
        nome:"HOEGAARDEN ROSEE"
    },
    {
        pontos:0,
        nome:"LEFFE RUBY" 
    },
    {
        pontos:0,
        nome:"KWAK"
    },
    {
        pontos:0,
        nome:"BUD" 
    },
    {
        pontos:0,
        nome:"LEFFE AMBREE"
    },
    {
        pontos:0,
        nome:"LEFFE RITUEL 9o"
    },     
    {
        pontos:0,
        nome:"LEFFE ROYALE"
    },
    {
        pontos:0,
        nome:"CORONA EXTRA"} ,
    {
        pontos:0,
        nome:"GINETTE LAGER"
    },
    {
        pontos:0,
        nome:"LEFFE BRUNE"
    },
    {
        pontos:0,
        nome:"BIRRA DEL BORGO"
    },     
    {
        pontos:0,
        nome:"LEFFE LA LEGERE"
    },
    {
        pontos:0,
        nome:"HOEGAARDEN GRAND CRU"
    },
    {
        pontos:0,
        nome:"GINETTE BLANCHE"
    },
    {
        pontos:0,
        nome:"CAMDEN PALE ALE"} ,
    {
        pontos:0,
        nome:"CAMDEN HELLS"
    },        
    {
        pontos:0,
        nome:"GINETTE TRIPLE"
    },
    {
        pontos:0,
        nome:"LEFFE BLONDE 0,0"
    },
    {
        pontos:0,
        nome:"GINETTE FRUIT"
    },
    {
        pontos:0,
        nome:"GINETTE BLONDE"
    },
    {
        pontos:0,
        nome:"LEFFE TRIPLE"
    },
]
let historicOfTop = []
let nextAvaliableId = 0
routes.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/frontend', 'index.html'));
    // res.sendFile()
})
routes.get('/last/:k', (req, res) => {
    const k = parseInt(req.params.k)
    arrayOfBrands.sort((a, b) => a.pontos> b.pontos ? -1 : 1)
    res.send(arrayOfBrands.filter((item,idx) => idx <= k))
})
// routes.post('/:brand',(req,res)=>{
//     const brand = req.params.brand
//     res.send(brand)
// })
routes.get('/historic',(req,res)=>{
    res.send(historicOfTop.filter((v, i, a) => a.indexOf(v) === i))
})
routes.post('/nextAvaliable',(req,res)=>{
    // while(dataBase[nextAvaliableId].used)
    //     nextAvaliableId++
    // console.log(typeof(dataBase[nextAvaliableId].orderQnt));
    index = arrayOfBrands.findIndex(item => item.nome === dataBase[nextAvaliableId].subrand)
    
    if(index === -1)
        res.send({message:"Brand not found"})
    dataBase[nextAvaliableId].used = true
    arrayOfBrands[index].pontos += 0.7 + (arrayOfBrands[index].pontos * 0.3/2100)
    arrayOfBrands.sort((a, b) => a.pontos> b.pontos ? -1 : 1)
    historicOfTop.push(arrayOfBrands.filter((item,idx) => idx <= 5))
    // console.log(historicOfTop);
    nextAvaliableId++
    res.send({
        insertedItem:`${dataBase[nextAvaliableId-1].subrand}`,
        orderQnt:`${dataBase[nextAvaliableId-1].orderQnt}`,
        top_5:arrayOfBrands.filter((item,idx) => idx <= 5)
    })
})
module.exports = routes