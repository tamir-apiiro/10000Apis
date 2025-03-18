
const express = require('express')
import {handler8330} from "./handler8330";
const app = express()
app.get('/8330', handler8330)
app.listen(3000, () => {})
        