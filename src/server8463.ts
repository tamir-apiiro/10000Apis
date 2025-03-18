
const express = require('express')
import {handler8463} from "./handler8463";
const app = express()
app.get('/8463', handler8463)
app.listen(3000, () => {})
        