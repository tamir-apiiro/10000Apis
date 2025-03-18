
const express = require('express')
import {handler5966} from "./handler5966";
const app = express()
app.get('/5966', handler5966)
app.listen(3000, () => {})
        