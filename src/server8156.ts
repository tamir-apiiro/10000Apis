
const express = require('express')
import {handler8156} from "./handler8156";
const app = express()
app.get('/8156', handler8156)
app.listen(3000, () => {})
        