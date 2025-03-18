
const express = require('express')
import {handler2110} from "./handler2110";
const app = express()
app.get('/2110', handler2110)
app.listen(3000, () => {})
        