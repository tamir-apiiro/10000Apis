
const express = require('express')
import {handler5186} from "./handler5186";
const app = express()
app.get('/5186', handler5186)
app.listen(3000, () => {})
        