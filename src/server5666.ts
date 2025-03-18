
const express = require('express')
import {handler5666} from "./handler5666";
const app = express()
app.get('/5666', handler5666)
app.listen(3000, () => {})
        