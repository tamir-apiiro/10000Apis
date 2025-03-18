
const express = require('express')
import {handler5174} from "./handler5174";
const app = express()
app.get('/5174', handler5174)
app.listen(3000, () => {})
        