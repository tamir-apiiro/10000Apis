
const express = require('express')
import {handler5246} from "./handler5246";
const app = express()
app.get('/5246', handler5246)
app.listen(3000, () => {})
        