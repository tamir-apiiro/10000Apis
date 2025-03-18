
const express = require('express')
import {handler2319} from "./handler2319";
const app = express()
app.get('/2319', handler2319)
app.listen(3000, () => {})
        