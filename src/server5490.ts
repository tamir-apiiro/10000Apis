
const express = require('express')
import {handler5490} from "./handler5490";
const app = express()
app.get('/5490', handler5490)
app.listen(3000, () => {})
        