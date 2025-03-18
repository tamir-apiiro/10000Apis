
const express = require('express')
import {handler5171} from "./handler5171";
const app = express()
app.get('/5171', handler5171)
app.listen(3000, () => {})
        