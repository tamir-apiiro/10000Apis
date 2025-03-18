
const express = require('express')
import {handler5278} from "./handler5278";
const app = express()
app.get('/5278', handler5278)
app.listen(3000, () => {})
        