
const express = require('express')
import {handler5472} from "./handler5472";
const app = express()
app.get('/5472', handler5472)
app.listen(3000, () => {})
        