
const express = require('express')
import {handler5053} from "./handler5053";
const app = express()
app.get('/5053', handler5053)
app.listen(3000, () => {})
        