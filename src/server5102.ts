
const express = require('express')
import {handler5102} from "./handler5102";
const app = express()
app.get('/5102', handler5102)
app.listen(3000, () => {})
        