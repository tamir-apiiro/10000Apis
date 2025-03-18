
const express = require('express')
import {handler7039} from "./handler7039";
const app = express()
app.get('/7039', handler7039)
app.listen(3000, () => {})
        