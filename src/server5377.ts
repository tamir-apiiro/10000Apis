
const express = require('express')
import {handler5377} from "./handler5377";
const app = express()
app.get('/5377', handler5377)
app.listen(3000, () => {})
        