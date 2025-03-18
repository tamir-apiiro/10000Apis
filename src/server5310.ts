
const express = require('express')
import {handler5310} from "./handler5310";
const app = express()
app.get('/5310', handler5310)
app.listen(3000, () => {})
        