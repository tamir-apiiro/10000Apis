
const express = require('express')
import {handler5277} from "./handler5277";
const app = express()
app.get('/5277', handler5277)
app.listen(3000, () => {})
        