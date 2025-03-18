
const express = require('express')
import {handler5133} from "./handler5133";
const app = express()
app.get('/5133', handler5133)
app.listen(3000, () => {})
        