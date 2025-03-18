
const express = require('express')
import {handler501} from "./handler501";
const app = express()
app.get('/501', handler501)
app.listen(3000, () => {})
        