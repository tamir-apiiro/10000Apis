
const express = require('express')
import {handler2027} from "./handler2027";
const app = express()
app.get('/2027', handler2027)
app.listen(3000, () => {})
        