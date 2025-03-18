
const express = require('express')
import {handler5300} from "./handler5300";
const app = express()
app.get('/5300', handler5300)
app.listen(3000, () => {})
        