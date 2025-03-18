
const express = require('express')
import {handler8035} from "./handler8035";
const app = express()
app.get('/8035', handler8035)
app.listen(3000, () => {})
        