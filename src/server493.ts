
const express = require('express')
import {handler493} from "./handler493";
const app = express()
app.get('/493', handler493)
app.listen(3000, () => {})
        