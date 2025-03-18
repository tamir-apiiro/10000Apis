
const express = require('express')
import {handler7050} from "./handler7050";
const app = express()
app.get('/7050', handler7050)
app.listen(3000, () => {})
        