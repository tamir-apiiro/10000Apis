
const express = require('express')
import {handler8872} from "./handler8872";
const app = express()
app.get('/8872', handler8872)
app.listen(3000, () => {})
        