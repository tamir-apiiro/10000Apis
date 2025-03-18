
const express = require('express')
import {handler8364} from "./handler8364";
const app = express()
app.get('/8364', handler8364)
app.listen(3000, () => {})
        