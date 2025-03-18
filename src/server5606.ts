
const express = require('express')
import {handler5606} from "./handler5606";
const app = express()
app.get('/5606', handler5606)
app.listen(3000, () => {})
        