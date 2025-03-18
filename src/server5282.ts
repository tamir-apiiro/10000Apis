
const express = require('express')
import {handler5282} from "./handler5282";
const app = express()
app.get('/5282', handler5282)
app.listen(3000, () => {})
        