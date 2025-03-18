
const express = require('express')
import {handler8008} from "./handler8008";
const app = express()
app.get('/8008', handler8008)
app.listen(3000, () => {})
        