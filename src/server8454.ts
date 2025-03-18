
const express = require('express')
import {handler8454} from "./handler8454";
const app = express()
app.get('/8454', handler8454)
app.listen(3000, () => {})
        