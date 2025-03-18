
const express = require('express')
import {handler5311} from "./handler5311";
const app = express()
app.get('/5311', handler5311)
app.listen(3000, () => {})
        