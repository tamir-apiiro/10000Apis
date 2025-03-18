
const express = require('express')
import {handler8434} from "./handler8434";
const app = express()
app.get('/8434', handler8434)
app.listen(3000, () => {})
        