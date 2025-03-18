
const express = require('express')
import {handler5024} from "./handler5024";
const app = express()
app.get('/5024', handler5024)
app.listen(3000, () => {})
        