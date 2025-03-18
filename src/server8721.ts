
const express = require('express')
import {handler8721} from "./handler8721";
const app = express()
app.get('/8721', handler8721)
app.listen(3000, () => {})
        