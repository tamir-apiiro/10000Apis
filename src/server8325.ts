
const express = require('express')
import {handler8325} from "./handler8325";
const app = express()
app.get('/8325', handler8325)
app.listen(3000, () => {})
        