
const express = require('express')
import {handler5412} from "./handler5412";
const app = express()
app.get('/5412', handler5412)
app.listen(3000, () => {})
        