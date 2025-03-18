
const express = require('express')
import {handler5241} from "./handler5241";
const app = express()
app.get('/5241', handler5241)
app.listen(3000, () => {})
        