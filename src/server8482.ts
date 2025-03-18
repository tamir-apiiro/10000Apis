
const express = require('express')
import {handler8482} from "./handler8482";
const app = express()
app.get('/8482', handler8482)
app.listen(3000, () => {})
        