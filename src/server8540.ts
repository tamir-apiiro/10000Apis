
const express = require('express')
import {handler8540} from "./handler8540";
const app = express()
app.get('/8540', handler8540)
app.listen(3000, () => {})
        