
const express = require('express')
import {handler5253} from "./handler5253";
const app = express()
app.get('/5253', handler5253)
app.listen(3000, () => {})
        