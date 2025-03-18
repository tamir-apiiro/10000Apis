
const express = require('express')
import {handler8233} from "./handler8233";
const app = express()
app.get('/8233', handler8233)
app.listen(3000, () => {})
        