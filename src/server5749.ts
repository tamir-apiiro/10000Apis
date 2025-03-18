
const express = require('express')
import {handler5749} from "./handler5749";
const app = express()
app.get('/5749', handler5749)
app.listen(3000, () => {})
        