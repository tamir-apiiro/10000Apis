
const express = require('express')
import {handler2325} from "./handler2325";
const app = express()
app.get('/2325', handler2325)
app.listen(3000, () => {})
        