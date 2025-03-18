
const express = require('express')
import {handler8026} from "./handler8026";
const app = express()
app.get('/8026', handler8026)
app.listen(3000, () => {})
        