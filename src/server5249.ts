
const express = require('express')
import {handler5249} from "./handler5249";
const app = express()
app.get('/5249', handler5249)
app.listen(3000, () => {})
        