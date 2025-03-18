
const express = require('express')
import {handler8000} from "./handler8000";
const app = express()
app.get('/8000', handler8000)
app.listen(3000, () => {})
        