
const express = require('express')
import {handler8297} from "./handler8297";
const app = express()
app.get('/8297', handler8297)
app.listen(3000, () => {})
        