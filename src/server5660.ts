
const express = require('express')
import {handler5660} from "./handler5660";
const app = express()
app.get('/5660', handler5660)
app.listen(3000, () => {})
        