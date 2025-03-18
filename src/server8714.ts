
const express = require('express')
import {handler8714} from "./handler8714";
const app = express()
app.get('/8714', handler8714)
app.listen(3000, () => {})
        