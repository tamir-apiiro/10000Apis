
const express = require('express')
import {handler8550} from "./handler8550";
const app = express()
app.get('/8550', handler8550)
app.listen(3000, () => {})
        