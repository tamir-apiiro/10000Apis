
const express = require('express')
import {handler5535} from "./handler5535";
const app = express()
app.get('/5535', handler5535)
app.listen(3000, () => {})
        