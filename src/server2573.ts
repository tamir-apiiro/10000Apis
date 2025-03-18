
const express = require('express')
import {handler2573} from "./handler2573";
const app = express()
app.get('/2573', handler2573)
app.listen(3000, () => {})
        