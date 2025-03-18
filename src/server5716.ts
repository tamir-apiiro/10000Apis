
const express = require('express')
import {handler5716} from "./handler5716";
const app = express()
app.get('/5716', handler5716)
app.listen(3000, () => {})
        