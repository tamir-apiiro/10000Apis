
const express = require('express')
import {handler8756} from "./handler8756";
const app = express()
app.get('/8756', handler8756)
app.listen(3000, () => {})
        