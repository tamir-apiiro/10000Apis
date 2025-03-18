
const express = require('express')
import {handler2660} from "./handler2660";
const app = express()
app.get('/2660', handler2660)
app.listen(3000, () => {})
        