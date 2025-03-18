
const express = require('express')
import {handler8102} from "./handler8102";
const app = express()
app.get('/8102', handler8102)
app.listen(3000, () => {})
        