
const express = require('express')
import {handler2314} from "./handler2314";
const app = express()
app.get('/2314', handler2314)
app.listen(3000, () => {})
        