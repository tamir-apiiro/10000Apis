
const express = require('express')
import {handler5567} from "./handler5567";
const app = express()
app.get('/5567', handler5567)
app.listen(3000, () => {})
        