
const express = require('express')
import {handler5573} from "./handler5573";
const app = express()
app.get('/5573', handler5573)
app.listen(3000, () => {})
        