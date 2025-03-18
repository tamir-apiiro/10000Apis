
const express = require('express')
import {handler5429} from "./handler5429";
const app = express()
app.get('/5429', handler5429)
app.listen(3000, () => {})
        