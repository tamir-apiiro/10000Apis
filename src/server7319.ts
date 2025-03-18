
const express = require('express')
import {handler7319} from "./handler7319";
const app = express()
app.get('/7319', handler7319)
app.listen(3000, () => {})
        