
const express = require('express')
import {handler2584} from "./handler2584";
const app = express()
app.get('/2584', handler2584)
app.listen(3000, () => {})
        