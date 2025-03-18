
const express = require('express')
import {handler2329} from "./handler2329";
const app = express()
app.get('/2329', handler2329)
app.listen(3000, () => {})
        