
const express = require('express')
import {handler5075} from "./handler5075";
const app = express()
app.get('/5075', handler5075)
app.listen(3000, () => {})
        