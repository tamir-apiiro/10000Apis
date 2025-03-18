
const express = require('express')
import {handler5350} from "./handler5350";
const app = express()
app.get('/5350', handler5350)
app.listen(3000, () => {})
        