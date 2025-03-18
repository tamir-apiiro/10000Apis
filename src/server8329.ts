
const express = require('express')
import {handler8329} from "./handler8329";
const app = express()
app.get('/8329', handler8329)
app.listen(3000, () => {})
        