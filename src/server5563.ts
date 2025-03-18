
const express = require('express')
import {handler5563} from "./handler5563";
const app = express()
app.get('/5563', handler5563)
app.listen(3000, () => {})
        