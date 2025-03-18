
const express = require('express')
import {handler8751} from "./handler8751";
const app = express()
app.get('/8751', handler8751)
app.listen(3000, () => {})
        