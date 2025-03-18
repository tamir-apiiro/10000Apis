
const express = require('express')
import {handler8741} from "./handler8741";
const app = express()
app.get('/8741', handler8741)
app.listen(3000, () => {})
        