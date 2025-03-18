
const express = require('express')
import {handler5220} from "./handler5220";
const app = express()
app.get('/5220', handler5220)
app.listen(3000, () => {})
        