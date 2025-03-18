
const express = require('express')
import {handler7255} from "./handler7255";
const app = express()
app.get('/7255', handler7255)
app.listen(3000, () => {})
        