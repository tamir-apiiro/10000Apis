
const express = require('express')
import {handler8451} from "./handler8451";
const app = express()
app.get('/8451', handler8451)
app.listen(3000, () => {})
        