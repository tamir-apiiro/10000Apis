
const express = require('express')
import {handler2745} from "./handler2745";
const app = express()
app.get('/2745', handler2745)
app.listen(3000, () => {})
        