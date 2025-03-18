
const express = require('express')
import {handler8261} from "./handler8261";
const app = express()
app.get('/8261', handler8261)
app.listen(3000, () => {})
        