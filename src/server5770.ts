
const express = require('express')
import {handler5770} from "./handler5770";
const app = express()
app.get('/5770', handler5770)
app.listen(3000, () => {})
        