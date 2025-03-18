
const express = require('express')
import {handler8869} from "./handler8869";
const app = express()
app.get('/8869', handler8869)
app.listen(3000, () => {})
        