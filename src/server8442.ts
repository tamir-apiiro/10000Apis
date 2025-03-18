
const express = require('express')
import {handler8442} from "./handler8442";
const app = express()
app.get('/8442', handler8442)
app.listen(3000, () => {})
        