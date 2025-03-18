
const express = require('express')
import {handler8314} from "./handler8314";
const app = express()
app.get('/8314', handler8314)
app.listen(3000, () => {})
        