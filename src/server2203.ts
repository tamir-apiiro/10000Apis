
const express = require('express')
import {handler2203} from "./handler2203";
const app = express()
app.get('/2203', handler2203)
app.listen(3000, () => {})
        