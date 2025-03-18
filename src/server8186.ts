
const express = require('express')
import {handler8186} from "./handler8186";
const app = express()
app.get('/8186', handler8186)
app.listen(3000, () => {})
        