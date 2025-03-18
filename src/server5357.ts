
const express = require('express')
import {handler5357} from "./handler5357";
const app = express()
app.get('/5357', handler5357)
app.listen(3000, () => {})
        