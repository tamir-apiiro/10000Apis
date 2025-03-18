
const express = require('express')
import {handler2364} from "./handler2364";
const app = express()
app.get('/2364', handler2364)
app.listen(3000, () => {})
        