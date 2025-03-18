
const express = require('express')
import {handler8250} from "./handler8250";
const app = express()
app.get('/8250', handler8250)
app.listen(3000, () => {})
        