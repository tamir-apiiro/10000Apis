
const express = require('express')
import {handler5319} from "./handler5319";
const app = express()
app.get('/5319', handler5319)
app.listen(3000, () => {})
        