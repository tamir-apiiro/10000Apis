
const express = require('express')
import {handler5645} from "./handler5645";
const app = express()
app.get('/5645', handler5645)
app.listen(3000, () => {})
        