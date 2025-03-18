
const express = require('express')
import {handler8501} from "./handler8501";
const app = express()
app.get('/8501', handler8501)
app.listen(3000, () => {})
        