
const express = require('express')
import {handler8082} from "./handler8082";
const app = express()
app.get('/8082', handler8082)
app.listen(3000, () => {})
        