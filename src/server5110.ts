
const express = require('express')
import {handler5110} from "./handler5110";
const app = express()
app.get('/5110', handler5110)
app.listen(3000, () => {})
        