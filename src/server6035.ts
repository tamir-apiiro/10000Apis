
const express = require('express')
import {handler6035} from "./handler6035";
const app = express()
app.get('/6035', handler6035)
app.listen(3000, () => {})
        