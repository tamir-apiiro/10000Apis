
const express = require('express')
import {handler3035} from "./handler3035";
const app = express()
app.get('/3035', handler3035)
app.listen(3000, () => {})
        