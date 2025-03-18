
const express = require('express')
import {handler9035} from "./handler9035";
const app = express()
app.get('/9035', handler9035)
app.listen(3000, () => {})
        