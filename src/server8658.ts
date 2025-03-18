
const express = require('express')
import {handler8658} from "./handler8658";
const app = express()
app.get('/8658', handler8658)
app.listen(3000, () => {})
        