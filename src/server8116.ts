
const express = require('express')
import {handler8116} from "./handler8116";
const app = express()
app.get('/8116', handler8116)
app.listen(3000, () => {})
        