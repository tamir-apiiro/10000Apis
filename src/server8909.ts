
const express = require('express')
import {handler8909} from "./handler8909";
const app = express()
app.get('/8909', handler8909)
app.listen(3000, () => {})
        