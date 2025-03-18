
const express = require('express')
import {handler8493} from "./handler8493";
const app = express()
app.get('/8493', handler8493)
app.listen(3000, () => {})
        