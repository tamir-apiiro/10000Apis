
const express = require('express')
import {handler5504} from "./handler5504";
const app = express()
app.get('/5504', handler5504)
app.listen(3000, () => {})
        