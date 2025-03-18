
const express = require('express')
import {handler8157} from "./handler8157";
const app = express()
app.get('/8157', handler8157)
app.listen(3000, () => {})
        