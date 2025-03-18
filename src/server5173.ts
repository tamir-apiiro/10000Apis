
const express = require('express')
import {handler5173} from "./handler5173";
const app = express()
app.get('/5173', handler5173)
app.listen(3000, () => {})
        