
const express = require('express')
import {handler2171} from "./handler2171";
const app = express()
app.get('/2171', handler2171)
app.listen(3000, () => {})
        