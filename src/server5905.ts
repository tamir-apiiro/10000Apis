
const express = require('express')
import {handler5905} from "./handler5905";
const app = express()
app.get('/5905', handler5905)
app.listen(3000, () => {})
        