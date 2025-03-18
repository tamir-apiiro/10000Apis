
const express = require('express')
import {handler8407} from "./handler8407";
const app = express()
app.get('/8407', handler8407)
app.listen(3000, () => {})
        