
const express = require('express')
import {handler5135} from "./handler5135";
const app = express()
app.get('/5135', handler5135)
app.listen(3000, () => {})
        