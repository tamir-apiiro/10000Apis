
const express = require('express')
import {handler5714} from "./handler5714";
const app = express()
app.get('/5714', handler5714)
app.listen(3000, () => {})
        