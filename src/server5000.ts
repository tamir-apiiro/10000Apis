
const express = require('express')
import {handler5000} from "./handler5000";
const app = express()
app.get('/5000', handler5000)
app.listen(3000, () => {})
        