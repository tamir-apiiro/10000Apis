
const express = require('express')
import {handler5233} from "./handler5233";
const app = express()
app.get('/5233', handler5233)
app.listen(3000, () => {})
        