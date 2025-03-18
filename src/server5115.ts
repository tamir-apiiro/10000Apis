
const express = require('express')
import {handler5115} from "./handler5115";
const app = express()
app.get('/5115', handler5115)
app.listen(3000, () => {})
        