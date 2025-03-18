
const express = require('express')
import {handler5112} from "./handler5112";
const app = express()
app.get('/5112', handler5112)
app.listen(3000, () => {})
        