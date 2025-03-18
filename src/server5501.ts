
const express = require('express')
import {handler5501} from "./handler5501";
const app = express()
app.get('/5501', handler5501)
app.listen(3000, () => {})
        