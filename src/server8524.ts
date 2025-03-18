
const express = require('express')
import {handler8524} from "./handler8524";
const app = express()
app.get('/8524', handler8524)
app.listen(3000, () => {})
        