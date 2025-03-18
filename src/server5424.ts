
const express = require('express')
import {handler5424} from "./handler5424";
const app = express()
app.get('/5424', handler5424)
app.listen(3000, () => {})
        