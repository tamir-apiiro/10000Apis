
const express = require('express')
import {handler5266} from "./handler5266";
const app = express()
app.get('/5266', handler5266)
app.listen(3000, () => {})
        