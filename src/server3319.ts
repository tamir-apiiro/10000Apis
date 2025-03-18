
const express = require('express')
import {handler3319} from "./handler3319";
const app = express()
app.get('/3319', handler3319)
app.listen(3000, () => {})
        