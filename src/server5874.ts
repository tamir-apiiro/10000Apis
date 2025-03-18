
const express = require('express')
import {handler5874} from "./handler5874";
const app = express()
app.get('/5874', handler5874)
app.listen(3000, () => {})
        