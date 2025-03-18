
const express = require('express')
import {handler8472} from "./handler8472";
const app = express()
app.get('/8472', handler8472)
app.listen(3000, () => {})
        