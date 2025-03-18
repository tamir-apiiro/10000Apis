
const express = require('express')
import {handler8415} from "./handler8415";
const app = express()
app.get('/8415', handler8415)
app.listen(3000, () => {})
        