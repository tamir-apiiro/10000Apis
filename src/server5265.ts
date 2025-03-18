
const express = require('express')
import {handler5265} from "./handler5265";
const app = express()
app.get('/5265', handler5265)
app.listen(3000, () => {})
        