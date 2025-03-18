
const express = require('express')
import {handler5267} from "./handler5267";
const app = express()
app.get('/5267', handler5267)
app.listen(3000, () => {})
        