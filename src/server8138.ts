
const express = require('express')
import {handler8138} from "./handler8138";
const app = express()
app.get('/8138', handler8138)
app.listen(3000, () => {})
        