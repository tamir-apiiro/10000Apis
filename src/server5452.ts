
const express = require('express')
import {handler5452} from "./handler5452";
const app = express()
app.get('/5452', handler5452)
app.listen(3000, () => {})
        