
const express = require('express')
import {handler8184} from "./handler8184";
const app = express()
app.get('/8184', handler8184)
app.listen(3000, () => {})
        