
const express = require('express')
import {handler8998} from "./handler8998";
const app = express()
app.get('/8998', handler8998)
app.listen(3000, () => {})
        