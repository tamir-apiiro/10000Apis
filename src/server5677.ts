
const express = require('express')
import {handler5677} from "./handler5677";
const app = express()
app.get('/5677', handler5677)
app.listen(3000, () => {})
        