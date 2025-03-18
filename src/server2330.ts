
const express = require('express')
import {handler2330} from "./handler2330";
const app = express()
app.get('/2330', handler2330)
app.listen(3000, () => {})
        