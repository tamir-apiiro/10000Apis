
const express = require('express')
import {handler5408} from "./handler5408";
const app = express()
app.get('/5408', handler5408)
app.listen(3000, () => {})
        