
const express = require('express')
import {handler8494} from "./handler8494";
const app = express()
app.get('/8494', handler8494)
app.listen(3000, () => {})
        