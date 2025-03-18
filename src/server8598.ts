
const express = require('express')
import {handler8598} from "./handler8598";
const app = express()
app.get('/8598', handler8598)
app.listen(3000, () => {})
        