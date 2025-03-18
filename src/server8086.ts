
const express = require('express')
import {handler8086} from "./handler8086";
const app = express()
app.get('/8086', handler8086)
app.listen(3000, () => {})
        