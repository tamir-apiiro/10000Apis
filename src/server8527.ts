
const express = require('express')
import {handler8527} from "./handler8527";
const app = express()
app.get('/8527', handler8527)
app.listen(3000, () => {})
        