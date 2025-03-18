
const express = require('express')
import {handler5138} from "./handler5138";
const app = express()
app.get('/5138', handler5138)
app.listen(3000, () => {})
        