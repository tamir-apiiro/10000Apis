
const express = require('express')
import {handler5544} from "./handler5544";
const app = express()
app.get('/5544', handler5544)
app.listen(3000, () => {})
        