
const express = require('express')
import {handler2815} from "./handler2815";
const app = express()
app.get('/2815', handler2815)
app.listen(3000, () => {})
        