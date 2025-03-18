
const express = require('express')
import {handler5675} from "./handler5675";
const app = express()
app.get('/5675', handler5675)
app.listen(3000, () => {})
        