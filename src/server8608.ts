
const express = require('express')
import {handler8608} from "./handler8608";
const app = express()
app.get('/8608', handler8608)
app.listen(3000, () => {})
        