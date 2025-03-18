
const express = require('express')
import {handler5255} from "./handler5255";
const app = express()
app.get('/5255', handler5255)
app.listen(3000, () => {})
        