
const express = require('express')
import {handler5288} from "./handler5288";
const app = express()
app.get('/5288', handler5288)
app.listen(3000, () => {})
        