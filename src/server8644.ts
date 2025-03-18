
const express = require('express')
import {handler8644} from "./handler8644";
const app = express()
app.get('/8644', handler8644)
app.listen(3000, () => {})
        