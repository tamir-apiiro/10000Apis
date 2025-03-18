
const express = require('express')
import {handler5494} from "./handler5494";
const app = express()
app.get('/5494', handler5494)
app.listen(3000, () => {})
        