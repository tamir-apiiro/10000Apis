
const express = require('express')
import {handler8311} from "./handler8311";
const app = express()
app.get('/8311', handler8311)
app.listen(3000, () => {})
        