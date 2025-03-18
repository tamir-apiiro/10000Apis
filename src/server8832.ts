
const express = require('express')
import {handler8832} from "./handler8832";
const app = express()
app.get('/8832', handler8832)
app.listen(3000, () => {})
        