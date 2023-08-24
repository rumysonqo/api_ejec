import express from 'express'
import rutas_api from './rutas/rutas_api.js'
import cors from 'cors'
import {PORT} from './config.js'

const app=express()
app.use(cors())
app.use('/api',rutas_api)

app.listen(PORT);


console.log('servidor ejecutandose en el puerto:',PORT);