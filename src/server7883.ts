
const express = require('express')
import {handler7883} from "./handler7883";
const app = express()
app.get('/7883', handler7883)
app.listen(3000, () => {})
        