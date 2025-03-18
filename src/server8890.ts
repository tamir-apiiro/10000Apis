
const express = require('express')
import {handler8890} from "./handler8890";
const app = express()
app.get('/8890', handler8890)
app.listen(3000, () => {})
        