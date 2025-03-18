
const express = require('express')
import {handler5149} from "./handler5149";
const app = express()
app.get('/5149', handler5149)
app.listen(3000, () => {})
        