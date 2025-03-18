
const express = require('express')
import {handler2384} from "./handler2384";
const app = express()
app.get('/2384', handler2384)
app.listen(3000, () => {})
        