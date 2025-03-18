
const express = require('express')
import {handler8677} from "./handler8677";
const app = express()
app.get('/8677', handler8677)
app.listen(3000, () => {})
        