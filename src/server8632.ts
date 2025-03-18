
const express = require('express')
import {handler8632} from "./handler8632";
const app = express()
app.get('/8632', handler8632)
app.listen(3000, () => {})
        