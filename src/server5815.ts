
const express = require('express')
import {handler5815} from "./handler5815";
const app = express()
app.get('/5815', handler5815)
app.listen(3000, () => {})
        