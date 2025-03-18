
const express = require('express')
import {handler5176} from "./handler5176";
const app = express()
app.get('/5176', handler5176)
app.listen(3000, () => {})
        