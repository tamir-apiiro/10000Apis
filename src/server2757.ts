
const express = require('express')
import {handler2757} from "./handler2757";
const app = express()
app.get('/2757', handler2757)
app.listen(3000, () => {})
        