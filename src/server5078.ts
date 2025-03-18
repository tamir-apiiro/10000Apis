
const express = require('express')
import {handler5078} from "./handler5078";
const app = express()
app.get('/5078', handler5078)
app.listen(3000, () => {})
        