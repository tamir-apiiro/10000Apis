
const express = require('express')
import {handler5356} from "./handler5356";
const app = express()
app.get('/5356', handler5356)
app.listen(3000, () => {})
        