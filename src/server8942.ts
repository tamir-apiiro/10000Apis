
const express = require('express')
import {handler8942} from "./handler8942";
const app = express()
app.get('/8942', handler8942)
app.listen(3000, () => {})
        