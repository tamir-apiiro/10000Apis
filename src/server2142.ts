
const express = require('express')
import {handler2142} from "./handler2142";
const app = express()
app.get('/2142', handler2142)
app.listen(3000, () => {})
        