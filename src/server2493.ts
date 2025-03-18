
const express = require('express')
import {handler2493} from "./handler2493";
const app = express()
app.get('/2493', handler2493)
app.listen(3000, () => {})
        