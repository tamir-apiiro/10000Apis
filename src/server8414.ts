
const express = require('express')
import {handler8414} from "./handler8414";
const app = express()
app.get('/8414', handler8414)
app.listen(3000, () => {})
        