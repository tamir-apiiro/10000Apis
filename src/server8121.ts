
const express = require('express')
import {handler8121} from "./handler8121";
const app = express()
app.get('/8121', handler8121)
app.listen(3000, () => {})
        