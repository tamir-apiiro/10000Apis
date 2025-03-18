
const express = require('express')
import {handler5594} from "./handler5594";
const app = express()
app.get('/5594', handler5594)
app.listen(3000, () => {})
        