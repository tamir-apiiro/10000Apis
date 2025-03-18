
const express = require('express')
import {handler8594} from "./handler8594";
const app = express()
app.get('/8594', handler8594)
app.listen(3000, () => {})
        