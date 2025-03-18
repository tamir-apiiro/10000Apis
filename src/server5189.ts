
const express = require('express')
import {handler5189} from "./handler5189";
const app = express()
app.get('/5189', handler5189)
app.listen(3000, () => {})
        