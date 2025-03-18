
const express = require('express')
import {handler8253} from "./handler8253";
const app = express()
app.get('/8253', handler8253)
app.listen(3000, () => {})
        