
const express = require('express')
import {handler5409} from "./handler5409";
const app = express()
app.get('/5409', handler5409)
app.listen(3000, () => {})
        