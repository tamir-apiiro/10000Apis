
const express = require('express')
import {handler2602} from "./handler2602";
const app = express()
app.get('/2602', handler2602)
app.listen(3000, () => {})
        