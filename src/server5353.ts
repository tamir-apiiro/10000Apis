
const express = require('express')
import {handler5353} from "./handler5353";
const app = express()
app.get('/5353', handler5353)
app.listen(3000, () => {})
        