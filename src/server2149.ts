
const express = require('express')
import {handler2149} from "./handler2149";
const app = express()
app.get('/2149', handler2149)
app.listen(3000, () => {})
        