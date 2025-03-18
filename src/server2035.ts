
const express = require('express')
import {handler2035} from "./handler2035";
const app = express()
app.get('/2035', handler2035)
app.listen(3000, () => {})
        