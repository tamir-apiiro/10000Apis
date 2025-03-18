
const express = require('express')
import {handler5439} from "./handler5439";
const app = express()
app.get('/5439', handler5439)
app.listen(3000, () => {})
        