
const express = require('express')
import {handler5273} from "./handler5273";
const app = express()
app.get('/5273', handler5273)
app.listen(3000, () => {})
        