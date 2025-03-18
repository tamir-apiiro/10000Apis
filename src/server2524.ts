
const express = require('express')
import {handler2524} from "./handler2524";
const app = express()
app.get('/2524', handler2524)
app.listen(3000, () => {})
        