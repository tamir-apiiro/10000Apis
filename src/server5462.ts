
const express = require('express')
import {handler5462} from "./handler5462";
const app = express()
app.get('/5462', handler5462)
app.listen(3000, () => {})
        