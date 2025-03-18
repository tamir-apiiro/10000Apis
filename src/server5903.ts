
const express = require('express')
import {handler5903} from "./handler5903";
const app = express()
app.get('/5903', handler5903)
app.listen(3000, () => {})
        