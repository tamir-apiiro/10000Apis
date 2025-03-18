
const express = require('express')
import {handler2220} from "./handler2220";
const app = express()
app.get('/2220', handler2220)
app.listen(3000, () => {})
        