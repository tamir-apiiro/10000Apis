
const express = require('express')
import {handler2200} from "./handler2200";
const app = express()
app.get('/2200', handler2200)
app.listen(3000, () => {})
        