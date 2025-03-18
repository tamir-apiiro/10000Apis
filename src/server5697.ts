
const express = require('express')
import {handler5697} from "./handler5697";
const app = express()
app.get('/5697', handler5697)
app.listen(3000, () => {})
        