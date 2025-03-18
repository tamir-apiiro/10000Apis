
const express = require('express')
import {handler8387} from "./handler8387";
const app = express()
app.get('/8387', handler8387)
app.listen(3000, () => {})
        