
const express = require('express')
import {handler8836} from "./handler8836";
const app = express()
app.get('/8836', handler8836)
app.listen(3000, () => {})
        