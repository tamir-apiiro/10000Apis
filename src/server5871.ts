
const express = require('express')
import {handler5871} from "./handler5871";
const app = express()
app.get('/5871', handler5871)
app.listen(3000, () => {})
        