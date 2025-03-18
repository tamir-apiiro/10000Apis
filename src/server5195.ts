
const express = require('express')
import {handler5195} from "./handler5195";
const app = express()
app.get('/5195', handler5195)
app.listen(3000, () => {})
        