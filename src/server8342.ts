
const express = require('express')
import {handler8342} from "./handler8342";
const app = express()
app.get('/8342', handler8342)
app.listen(3000, () => {})
        