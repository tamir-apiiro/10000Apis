
const express = require('express')
import {handler5287} from "./handler5287";
const app = express()
app.get('/5287', handler5287)
app.listen(3000, () => {})
        