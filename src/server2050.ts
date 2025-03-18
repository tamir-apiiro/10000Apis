
const express = require('express')
import {handler2050} from "./handler2050";
const app = express()
app.get('/2050', handler2050)
app.listen(3000, () => {})
        