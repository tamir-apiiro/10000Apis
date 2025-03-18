
const express = require('express')
import {handler8636} from "./handler8636";
const app = express()
app.get('/8636', handler8636)
app.listen(3000, () => {})
        