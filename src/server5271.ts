
const express = require('express')
import {handler5271} from "./handler5271";
const app = express()
app.get('/5271', handler5271)
app.listen(3000, () => {})
        