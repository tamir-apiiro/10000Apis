
const express = require('express')
import {handler8267} from "./handler8267";
const app = express()
app.get('/8267', handler8267)
app.listen(3000, () => {})
        