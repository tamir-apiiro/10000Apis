
const express = require('express')
import {handler5314} from "./handler5314";
const app = express()
app.get('/5314', handler5314)
app.listen(3000, () => {})
        