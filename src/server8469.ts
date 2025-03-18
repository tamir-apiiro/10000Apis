
const express = require('express')
import {handler8469} from "./handler8469";
const app = express()
app.get('/8469', handler8469)
app.listen(3000, () => {})
        