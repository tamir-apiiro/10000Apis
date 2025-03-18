
const express = require('express')
import {handler5817} from "./handler5817";
const app = express()
app.get('/5817', handler5817)
app.listen(3000, () => {})
        