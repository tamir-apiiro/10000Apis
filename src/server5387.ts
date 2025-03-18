
const express = require('express')
import {handler5387} from "./handler5387";
const app = express()
app.get('/5387', handler5387)
app.listen(3000, () => {})
        