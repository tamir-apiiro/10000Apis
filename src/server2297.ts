
const express = require('express')
import {handler2297} from "./handler2297";
const app = express()
app.get('/2297', handler2297)
app.listen(3000, () => {})
        