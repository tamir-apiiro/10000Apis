
const express = require('express')
import {handler2749} from "./handler2749";
const app = express()
app.get('/2749', handler2749)
app.listen(3000, () => {})
        