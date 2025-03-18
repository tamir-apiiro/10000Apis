
const express = require('express')
import {handler8888} from "./handler8888";
const app = express()
app.get('/8888', handler8888)
app.listen(3000, () => {})
        