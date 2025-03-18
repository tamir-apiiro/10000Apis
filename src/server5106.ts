
const express = require('express')
import {handler5106} from "./handler5106";
const app = express()
app.get('/5106', handler5106)
app.listen(3000, () => {})
        