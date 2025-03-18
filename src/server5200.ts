
const express = require('express')
import {handler5200} from "./handler5200";
const app = express()
app.get('/5200', handler5200)
app.listen(3000, () => {})
        