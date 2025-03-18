
const express = require('express')
import {handler6408} from "./handler6408";
const app = express()
app.get('/6408', handler6408)
app.listen(3000, () => {})
        