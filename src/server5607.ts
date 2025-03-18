
const express = require('express')
import {handler5607} from "./handler5607";
const app = express()
app.get('/5607', handler5607)
app.listen(3000, () => {})
        