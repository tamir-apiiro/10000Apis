
const express = require('express')
import {handler8234} from "./handler8234";
const app = express()
app.get('/8234', handler8234)
app.listen(3000, () => {})
        