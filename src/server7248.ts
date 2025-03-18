
const express = require('express')
import {handler7248} from "./handler7248";
const app = express()
app.get('/7248', handler7248)
app.listen(3000, () => {})
        