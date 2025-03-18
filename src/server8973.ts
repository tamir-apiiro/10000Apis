
const express = require('express')
import {handler8973} from "./handler8973";
const app = express()
app.get('/8973', handler8973)
app.listen(3000, () => {})
        