
const express = require('express')
import {handler8535} from "./handler8535";
const app = express()
app.get('/8535', handler8535)
app.listen(3000, () => {})
        