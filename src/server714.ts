
const express = require('express')
import {handler714} from "./handler714";
const app = express()
app.get('/714', handler714)
app.listen(3000, () => {})
        