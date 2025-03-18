
const express = require('express')
import {handler8531} from "./handler8531";
const app = express()
app.get('/8531', handler8531)
app.listen(3000, () => {})
        