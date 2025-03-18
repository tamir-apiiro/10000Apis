
const express = require('express')
import {handler2697} from "./handler2697";
const app = express()
app.get('/2697', handler2697)
app.listen(3000, () => {})
        