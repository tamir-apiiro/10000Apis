
const express = require('express')
import {handler8309} from "./handler8309";
const app = express()
app.get('/8309', handler8309)
app.listen(3000, () => {})
        