
const express = require('express')
import {handler5025} from "./handler5025";
const app = express()
app.get('/5025', handler5025)
app.listen(3000, () => {})
        