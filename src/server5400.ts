
const express = require('express')
import {handler5400} from "./handler5400";
const app = express()
app.get('/5400', handler5400)
app.listen(3000, () => {})
        