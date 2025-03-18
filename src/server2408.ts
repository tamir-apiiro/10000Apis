
const express = require('express')
import {handler2408} from "./handler2408";
const app = express()
app.get('/2408', handler2408)
app.listen(3000, () => {})
        