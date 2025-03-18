
const express = require('express')
import {handler8171} from "./handler8171";
const app = express()
app.get('/8171', handler8171)
app.listen(3000, () => {})
        