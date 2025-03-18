
const express = require('express')
import {handler8091} from "./handler8091";
const app = express()
app.get('/8091', handler8091)
app.listen(3000, () => {})
        