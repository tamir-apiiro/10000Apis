
const express = require('express')
import {handler5177} from "./handler5177";
const app = express()
app.get('/5177', handler5177)
app.listen(3000, () => {})
        