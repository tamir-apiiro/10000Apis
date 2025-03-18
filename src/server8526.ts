
const express = require('express')
import {handler8526} from "./handler8526";
const app = express()
app.get('/8526', handler8526)
app.listen(3000, () => {})
        