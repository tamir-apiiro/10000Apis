
const express = require('express')
import {handler5320} from "./handler5320";
const app = express()
app.get('/5320', handler5320)
app.listen(3000, () => {})
        