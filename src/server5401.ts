
const express = require('express')
import {handler5401} from "./handler5401";
const app = express()
app.get('/5401', handler5401)
app.listen(3000, () => {})
        