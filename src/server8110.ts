
const express = require('express')
import {handler8110} from "./handler8110";
const app = express()
app.get('/8110', handler8110)
app.listen(3000, () => {})
        