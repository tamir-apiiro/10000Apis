
const express = require('express')
import {handler2472} from "./handler2472";
const app = express()
app.get('/2472', handler2472)
app.listen(3000, () => {})
        