
const express = require('express')
import {handler8660} from "./handler8660";
const app = express()
app.get('/8660', handler8660)
app.listen(3000, () => {})
        