
const express = require('express')
import {handler5384} from "./handler5384";
const app = express()
app.get('/5384', handler5384)
app.listen(3000, () => {})
        