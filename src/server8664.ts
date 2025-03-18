
const express = require('express')
import {handler8664} from "./handler8664";
const app = express()
app.get('/8664', handler8664)
app.listen(3000, () => {})
        