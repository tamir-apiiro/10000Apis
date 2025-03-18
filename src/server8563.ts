
const express = require('express')
import {handler8563} from "./handler8563";
const app = express()
app.get('/8563', handler8563)
app.listen(3000, () => {})
        