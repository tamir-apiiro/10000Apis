
const express = require('express')
import {handler2061} from "./handler2061";
const app = express()
app.get('/2061', handler2061)
app.listen(3000, () => {})
        