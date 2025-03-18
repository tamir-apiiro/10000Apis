
const express = require('express')
import {handler8583} from "./handler8583";
const app = express()
app.get('/8583', handler8583)
app.listen(3000, () => {})
        