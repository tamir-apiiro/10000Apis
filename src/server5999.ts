
const express = require('express')
import {handler5999} from "./handler5999";
const app = express()
app.get('/5999', handler5999)
app.listen(3000, () => {})
        