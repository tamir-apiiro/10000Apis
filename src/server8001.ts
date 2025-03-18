
const express = require('express')
import {handler8001} from "./handler8001";
const app = express()
app.get('/8001', handler8001)
app.listen(3000, () => {})
        