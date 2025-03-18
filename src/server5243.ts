
const express = require('express')
import {handler5243} from "./handler5243";
const app = express()
app.get('/5243', handler5243)
app.listen(3000, () => {})
        