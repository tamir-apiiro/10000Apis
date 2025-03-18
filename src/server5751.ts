
const express = require('express')
import {handler5751} from "./handler5751";
const app = express()
app.get('/5751', handler5751)
app.listen(3000, () => {})
        