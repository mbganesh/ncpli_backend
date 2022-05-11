import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import api from './Routers/api.js'

import cors from 'cors'


const app = express()
app.use(express.json())

// app.use(express.urlencoded({ extended: true }));   

app.use(cors())

mongoose.connect('mongodb://localhost/NCPLI')

app.use('/api' , api)

app.use(morgan('combined'))
app.use(morgan('dev'))

app.listen(9999)



