
const express = require('express')
import {handler8152} from "./handler8152";
const app = express()
app.get('/8152', handler8152)
app.listen(3000, () => {})
        