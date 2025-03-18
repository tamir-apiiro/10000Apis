
const express = require('express')
import {handler594} from "./handler594";
const app = express()
app.get('/594', handler594)
app.listen(3000, () => {})
        