
const express = require('express')
import {handler5739} from "./handler5739";
const app = express()
app.get('/5739', handler5739)
app.listen(3000, () => {})
        