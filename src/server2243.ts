
const express = require('express')
import {handler2243} from "./handler2243";
const app = express()
app.get('/2243', handler2243)
app.listen(3000, () => {})
        