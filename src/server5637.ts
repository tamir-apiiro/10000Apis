
const express = require('express')
import {handler5637} from "./handler5637";
const app = express()
app.get('/5637', handler5637)
app.listen(3000, () => {})
        