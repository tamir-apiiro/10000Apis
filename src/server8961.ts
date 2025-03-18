
const express = require('express')
import {handler8961} from "./handler8961";
const app = express()
app.get('/8961', handler8961)
app.listen(3000, () => {})
        