
const express = require('express')
import {handler8860} from "./handler8860";
const app = express()
app.get('/8860', handler8860)
app.listen(3000, () => {})
        