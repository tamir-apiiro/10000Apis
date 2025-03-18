
const express = require('express')
import {handler5431} from "./handler5431";
const app = express()
app.get('/5431', handler5431)
app.listen(3000, () => {})
        