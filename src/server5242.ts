
const express = require('express')
import {handler5242} from "./handler5242";
const app = express()
app.get('/5242', handler5242)
app.listen(3000, () => {})
        