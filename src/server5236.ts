
const express = require('express')
import {handler5236} from "./handler5236";
const app = express()
app.get('/5236', handler5236)
app.listen(3000, () => {})
        