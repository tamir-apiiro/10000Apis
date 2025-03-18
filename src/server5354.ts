
const express = require('express')
import {handler5354} from "./handler5354";
const app = express()
app.get('/5354', handler5354)
app.listen(3000, () => {})
        