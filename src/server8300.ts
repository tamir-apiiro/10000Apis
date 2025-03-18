
const express = require('express')
import {handler8300} from "./handler8300";
const app = express()
app.get('/8300', handler8300)
app.listen(3000, () => {})
        