
const express = require('express')
import {handler8160} from "./handler8160";
const app = express()
app.get('/8160', handler8160)
app.listen(3000, () => {})
        