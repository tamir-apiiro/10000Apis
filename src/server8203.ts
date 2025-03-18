
const express = require('express')
import {handler8203} from "./handler8203";
const app = express()
app.get('/8203', handler8203)
app.listen(3000, () => {})
        