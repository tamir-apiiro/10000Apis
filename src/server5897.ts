
const express = require('express')
import {handler5897} from "./handler5897";
const app = express()
app.get('/5897', handler5897)
app.listen(3000, () => {})
        