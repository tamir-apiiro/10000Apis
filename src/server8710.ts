
const express = require('express')
import {handler8710} from "./handler8710";
const app = express()
app.get('/8710', handler8710)
app.listen(3000, () => {})
        