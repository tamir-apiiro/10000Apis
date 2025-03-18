
const express = require('express')
import {handler5837} from "./handler5837";
const app = express()
app.get('/5837', handler5837)
app.listen(3000, () => {})
        