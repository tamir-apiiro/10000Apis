
const express = require('express')
import {handler2412} from "./handler2412";
const app = express()
app.get('/2412', handler2412)
app.listen(3000, () => {})
        