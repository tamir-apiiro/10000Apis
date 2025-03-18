
const express = require('express')
import {handler5252} from "./handler5252";
const app = express()
app.get('/5252', handler5252)
app.listen(3000, () => {})
        