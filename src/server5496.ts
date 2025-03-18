
const express = require('express')
import {handler5496} from "./handler5496";
const app = express()
app.get('/5496', handler5496)
app.listen(3000, () => {})
        