
const express = require('express')
import {handler5900} from "./handler5900";
const app = express()
app.get('/5900', handler5900)
app.listen(3000, () => {})
        