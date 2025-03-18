
const express = require('express')
import {handler5407} from "./handler5407";
const app = express()
app.get('/5407', handler5407)
app.listen(3000, () => {})
        