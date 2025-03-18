
const express = require('express')
import {handler2199} from "./handler2199";
const app = express()
app.get('/2199', handler2199)
app.listen(3000, () => {})
        