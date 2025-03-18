
const express = require('express')
import {handler8923} from "./handler8923";
const app = express()
app.get('/8923', handler8923)
app.listen(3000, () => {})
        