
const express = require('express')
import {handler5533} from "./handler5533";
const app = express()
app.get('/5533', handler5533)
app.listen(3000, () => {})
        