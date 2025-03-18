
const express = require('express')
import {handler8567} from "./handler8567";
const app = express()
app.get('/8567', handler8567)
app.listen(3000, () => {})
        