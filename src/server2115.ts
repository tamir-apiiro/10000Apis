
const express = require('express')
import {handler2115} from "./handler2115";
const app = express()
app.get('/2115', handler2115)
app.listen(3000, () => {})
        