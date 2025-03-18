
const express = require('express')
import {handler8409} from "./handler8409";
const app = express()
app.get('/8409', handler8409)
app.listen(3000, () => {})
        