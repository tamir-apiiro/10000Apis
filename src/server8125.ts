
const express = require('express')
import {handler8125} from "./handler8125";
const app = express()
app.get('/8125', handler8125)
app.listen(3000, () => {})
        