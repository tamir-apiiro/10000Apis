
const express = require('express')
import {handler5037} from "./handler5037";
const app = express()
app.get('/5037', handler5037)
app.listen(3000, () => {})
        