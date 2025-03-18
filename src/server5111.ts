
const express = require('express')
import {handler5111} from "./handler5111";
const app = express()
app.get('/5111', handler5111)
app.listen(3000, () => {})
        