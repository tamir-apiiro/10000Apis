
const express = require('express')
import {handler8076} from "./handler8076";
const app = express()
app.get('/8076', handler8076)
app.listen(3000, () => {})
        