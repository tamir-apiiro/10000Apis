
const express = require('express')
import {handler8246} from "./handler8246";
const app = express()
app.get('/8246', handler8246)
app.listen(3000, () => {})
        