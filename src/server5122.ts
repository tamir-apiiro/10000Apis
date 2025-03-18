
const express = require('express')
import {handler5122} from "./handler5122";
const app = express()
app.get('/5122', handler5122)
app.listen(3000, () => {})
        