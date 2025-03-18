
const express = require('express')
import {handler2053} from "./handler2053";
const app = express()
app.get('/2053', handler2053)
app.listen(3000, () => {})
        