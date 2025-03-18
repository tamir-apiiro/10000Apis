
const express = require('express')
import {handler8248} from "./handler8248";
const app = express()
app.get('/8248', handler8248)
app.listen(3000, () => {})
        