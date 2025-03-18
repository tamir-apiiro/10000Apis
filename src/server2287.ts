
const express = require('express')
import {handler2287} from "./handler2287";
const app = express()
app.get('/2287', handler2287)
app.listen(3000, () => {})
        