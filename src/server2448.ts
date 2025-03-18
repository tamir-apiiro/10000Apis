
const express = require('express')
import {handler2448} from "./handler2448";
const app = express()
app.get('/2448', handler2448)
app.listen(3000, () => {})
        