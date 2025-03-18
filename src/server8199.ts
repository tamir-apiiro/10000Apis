
const express = require('express')
import {handler8199} from "./handler8199";
const app = express()
app.get('/8199', handler8199)
app.listen(3000, () => {})
        