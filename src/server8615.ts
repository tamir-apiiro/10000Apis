
const express = require('express')
import {handler8615} from "./handler8615";
const app = express()
app.get('/8615', handler8615)
app.listen(3000, () => {})
        