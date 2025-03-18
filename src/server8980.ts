
const express = require('express')
import {handler8980} from "./handler8980";
const app = express()
app.get('/8980', handler8980)
app.listen(3000, () => {})
        