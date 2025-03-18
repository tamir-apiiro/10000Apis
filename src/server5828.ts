
const express = require('express')
import {handler5828} from "./handler5828";
const app = express()
app.get('/5828', handler5828)
app.listen(3000, () => {})
        