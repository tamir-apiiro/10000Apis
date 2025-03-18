
const express = require('express')
import {handler8133} from "./handler8133";
const app = express()
app.get('/8133', handler8133)
app.listen(3000, () => {})
        