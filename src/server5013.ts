
const express = require('express')
import {handler5013} from "./handler5013";
const app = express()
app.get('/5013', handler5013)
app.listen(3000, () => {})
        