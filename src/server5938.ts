
const express = require('express')
import {handler5938} from "./handler5938";
const app = express()
app.get('/5938', handler5938)
app.listen(3000, () => {})
        