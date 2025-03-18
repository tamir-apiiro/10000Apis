
const express = require('express')
import {handler5948} from "./handler5948";
const app = express()
app.get('/5948', handler5948)
app.listen(3000, () => {})
        