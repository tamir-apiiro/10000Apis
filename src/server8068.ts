
const express = require('express')
import {handler8068} from "./handler8068";
const app = express()
app.get('/8068', handler8068)
app.listen(3000, () => {})
        