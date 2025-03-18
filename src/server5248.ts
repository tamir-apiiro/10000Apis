
const express = require('express')
import {handler5248} from "./handler5248";
const app = express()
app.get('/5248', handler5248)
app.listen(3000, () => {})
        