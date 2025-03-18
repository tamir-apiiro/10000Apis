
const express = require('express')
import {handler8883} from "./handler8883";
const app = express()
app.get('/8883', handler8883)
app.listen(3000, () => {})
        