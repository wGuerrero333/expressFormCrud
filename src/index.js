import express from "express";

import indexRouters from './routes/index.js'

import { dirname, join } from 'path';
import { fileURLToPath } from 'url'

const app = express()

app.use(indexRouters)

// Establecer EJS como motor de plantillas


app.set('view engine', 'ejs')
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'vistas'))

// Rutas

// app.get('/resText', (req,res)=> {res.send('Responde res')})

// app.get('/home', (req,res)=> {res.render('home')})


app.listen( process.env.PORT || 3000)
console.log("Escucha por: ", process.env.PORT || 3000)

