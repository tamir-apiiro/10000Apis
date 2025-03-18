
const express = require('express')
import {handler8357} from "./handler8357";
const app = express()
app.get('/8357', handler8357)
app.listen(3000, () => {})
        