
const express = require('express')
import {handler8123} from "./handler8123";
const app = express()
app.get('/8123', handler8123)
app.listen(3000, () => {})
        