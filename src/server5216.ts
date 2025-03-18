
const express = require('express')
import {handler5216} from "./handler5216";
const app = express()
app.get('/5216', handler5216)
app.listen(3000, () => {})
        