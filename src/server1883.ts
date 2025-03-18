
const express = require('express')
import {handler1883} from "./handler1883";
const app = express()
app.get('/1883', handler1883)
app.listen(3000, () => {})
        