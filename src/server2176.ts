
const express = require('express')
import {handler2176} from "./handler2176";
const app = express()
app.get('/2176', handler2176)
app.listen(3000, () => {})
        