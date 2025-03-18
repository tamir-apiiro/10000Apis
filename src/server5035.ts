
const express = require('express')
import {handler5035} from "./handler5035";
const app = express()
app.get('/5035', handler5035)
app.listen(3000, () => {})
        