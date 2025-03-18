
const express = require('express')
import {handler8287} from "./handler8287";
const app = express()
app.get('/8287', handler8287)
app.listen(3000, () => {})
        