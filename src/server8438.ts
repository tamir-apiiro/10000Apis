
const express = require('express')
import {handler8438} from "./handler8438";
const app = express()
app.get('/8438', handler8438)
app.listen(3000, () => {})
        