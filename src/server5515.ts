
const express = require('express')
import {handler5515} from "./handler5515";
const app = express()
app.get('/5515', handler5515)
app.listen(3000, () => {})
        