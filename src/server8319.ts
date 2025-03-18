
const express = require('express')
import {handler8319} from "./handler8319";
const app = express()
app.get('/8319', handler8319)
app.listen(3000, () => {})
        