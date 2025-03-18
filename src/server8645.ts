
const express = require('express')
import {handler8645} from "./handler8645";
const app = express()
app.get('/8645', handler8645)
app.listen(3000, () => {})
        