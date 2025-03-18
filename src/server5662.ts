
const express = require('express')
import {handler5662} from "./handler5662";
const app = express()
app.get('/5662', handler5662)
app.listen(3000, () => {})
        