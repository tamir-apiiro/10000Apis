
const express = require('express')
import {handler5330} from "./handler5330";
const app = express()
app.get('/5330', handler5330)
app.listen(3000, () => {})
        