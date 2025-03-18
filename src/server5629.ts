
const express = require('express')
import {handler5629} from "./handler5629";
const app = express()
app.get('/5629', handler5629)
app.listen(3000, () => {})
        