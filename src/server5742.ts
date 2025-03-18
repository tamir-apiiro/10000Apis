
const express = require('express')
import {handler5742} from "./handler5742";
const app = express()
app.get('/5742', handler5742)
app.listen(3000, () => {})
        