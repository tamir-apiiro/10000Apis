
const express = require('express')
import {handler8573} from "./handler8573";
const app = express()
app.get('/8573', handler8573)
app.listen(3000, () => {})
        