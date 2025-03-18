
const express = require('express')
import {handler2612} from "./handler2612";
const app = express()
app.get('/2612', handler2612)
app.listen(3000, () => {})
        