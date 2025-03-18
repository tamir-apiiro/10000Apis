
const express = require('express')
import {handler2066} from "./handler2066";
const app = express()
app.get('/2066', handler2066)
app.listen(3000, () => {})
        