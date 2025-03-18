
const express = require('express')
import {handler8779} from "./handler8779";
const app = express()
app.get('/8779', handler8779)
app.listen(3000, () => {})
        