
const express = require('express')
import {handler5318} from "./handler5318";
const app = express()
app.get('/5318', handler5318)
app.listen(3000, () => {})
        