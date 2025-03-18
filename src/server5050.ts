
const express = require('express')
import {handler5050} from "./handler5050";
const app = express()
app.get('/5050', handler5050)
app.listen(3000, () => {})
        