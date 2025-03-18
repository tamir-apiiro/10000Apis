
const express = require('express')
import {handler8217} from "./handler8217";
const app = express()
app.get('/8217', handler8217)
app.listen(3000, () => {})
        