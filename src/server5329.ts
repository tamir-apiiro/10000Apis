
const express = require('express')
import {handler5329} from "./handler5329";
const app = express()
app.get('/5329', handler5329)
app.listen(3000, () => {})
        