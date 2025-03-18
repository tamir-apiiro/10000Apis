
const express = require('express')
import {handler4035} from "./handler4035";
const app = express()
app.get('/4035', handler4035)
app.listen(3000, () => {})
        