
const express = require('express')
import {handler2900} from "./handler2900";
const app = express()
app.get('/2900', handler2900)
app.listen(3000, () => {})
        