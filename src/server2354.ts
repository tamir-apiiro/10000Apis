
const express = require('express')
import {handler2354} from "./handler2354";
const app = express()
app.get('/2354', handler2354)
app.listen(3000, () => {})
        