
const express = require('express')
import {handler5142} from "./handler5142";
const app = express()
app.get('/5142', handler5142)
app.listen(3000, () => {})
        