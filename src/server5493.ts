
const express = require('express')
import {handler5493} from "./handler5493";
const app = express()
app.get('/5493', handler5493)
app.listen(3000, () => {})
        