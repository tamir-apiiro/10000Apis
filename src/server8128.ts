
const express = require('express')
import {handler8128} from "./handler8128";
const app = express()
app.get('/8128', handler8128)
app.listen(3000, () => {})
        