
const express = require('express')
import {handler5082} from "./handler5082";
const app = express()
app.get('/5082', handler5082)
app.listen(3000, () => {})
        