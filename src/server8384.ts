
const express = require('express')
import {handler8384} from "./handler8384";
const app = express()
app.get('/8384', handler8384)
app.listen(3000, () => {})
        