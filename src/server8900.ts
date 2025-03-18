
const express = require('express')
import {handler8900} from "./handler8900";
const app = express()
app.get('/8900', handler8900)
app.listen(3000, () => {})
        