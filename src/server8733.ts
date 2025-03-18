
const express = require('express')
import {handler8733} from "./handler8733";
const app = express()
app.get('/8733', handler8733)
app.listen(3000, () => {})
        