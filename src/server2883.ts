
const express = require('express')
import {handler2883} from "./handler2883";
const app = express()
app.get('/2883', handler2883)
app.listen(3000, () => {})
        