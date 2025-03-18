
const express = require('express')
import {handler8404} from "./handler8404";
const app = express()
app.get('/8404', handler8404)
app.listen(3000, () => {})
        