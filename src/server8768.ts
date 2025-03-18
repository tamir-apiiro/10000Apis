
const express = require('express')
import {handler8768} from "./handler8768";
const app = express()
app.get('/8768', handler8768)
app.listen(3000, () => {})
        