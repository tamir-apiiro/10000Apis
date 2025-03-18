
const express = require('express')
import {handler5123} from "./handler5123";
const app = express()
app.get('/5123', handler5123)
app.listen(3000, () => {})
        