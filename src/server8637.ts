
const express = require('express')
import {handler8637} from "./handler8637";
const app = express()
app.get('/8637', handler8637)
app.listen(3000, () => {})
        