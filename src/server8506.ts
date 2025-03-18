
const express = require('express')
import {handler8506} from "./handler8506";
const app = express()
app.get('/8506', handler8506)
app.listen(3000, () => {})
        