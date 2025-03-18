
const express = require('express')
import {handler2501} from "./handler2501";
const app = express()
app.get('/2501', handler2501)
app.listen(3000, () => {})
        