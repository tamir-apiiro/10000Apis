
const express = require('express')
import {handler2267} from "./handler2267";
const app = express()
app.get('/2267', handler2267)
app.listen(3000, () => {})
        