
const express = require('express')
import {handler8115} from "./handler8115";
const app = express()
app.get('/8115', handler8115)
app.listen(3000, () => {})
        