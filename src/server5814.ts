
const express = require('express')
import {handler5814} from "./handler5814";
const app = express()
app.get('/5814', handler5814)
app.listen(3000, () => {})
        