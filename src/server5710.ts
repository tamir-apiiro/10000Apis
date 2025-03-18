
const express = require('express')
import {handler5710} from "./handler5710";
const app = express()
app.get('/5710', handler5710)
app.listen(3000, () => {})
        