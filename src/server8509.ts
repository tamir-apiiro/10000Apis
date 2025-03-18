
const express = require('express')
import {handler8509} from "./handler8509";
const app = express()
app.get('/8509', handler8509)
app.listen(3000, () => {})
        