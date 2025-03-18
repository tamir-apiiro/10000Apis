
const express = require('express')
import {handler8098} from "./handler8098";
const app = express()
app.get('/8098', handler8098)
app.listen(3000, () => {})
        