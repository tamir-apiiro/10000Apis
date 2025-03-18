
const express = require('express')
import {handler8141} from "./handler8141";
const app = express()
app.get('/8141', handler8141)
app.listen(3000, () => {})
        