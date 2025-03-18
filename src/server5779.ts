
const express = require('express')
import {handler5779} from "./handler5779";
const app = express()
app.get('/5779', handler5779)
app.listen(3000, () => {})
        