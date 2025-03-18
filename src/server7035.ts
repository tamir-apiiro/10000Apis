
const express = require('express')
import {handler7035} from "./handler7035";
const app = express()
app.get('/7035', handler7035)
app.listen(3000, () => {})
        