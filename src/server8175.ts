
const express = require('express')
import {handler8175} from "./handler8175";
const app = express()
app.get('/8175', handler8175)
app.listen(3000, () => {})
        