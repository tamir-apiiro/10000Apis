
const express = require('express')
import {handler5365} from "./handler5365";
const app = express()
app.get('/5365', handler5365)
app.listen(3000, () => {})
        