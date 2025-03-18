
const express = require('express')
import {handler2249} from "./handler2249";
const app = express()
app.get('/2249', handler2249)
app.listen(3000, () => {})
        