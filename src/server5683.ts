
const express = require('express')
import {handler5683} from "./handler5683";
const app = express()
app.get('/5683', handler5683)
app.listen(3000, () => {})
        