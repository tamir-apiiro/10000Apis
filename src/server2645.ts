
const express = require('express')
import {handler2645} from "./handler2645";
const app = express()
app.get('/2645', handler2645)
app.listen(3000, () => {})
        