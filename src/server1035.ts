
const express = require('express')
import {handler1035} from "./handler1035";
const app = express()
app.get('/1035', handler1035)
app.listen(3000, () => {})
        