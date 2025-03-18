
const express = require('express')
import {handler5270} from "./handler5270";
const app = express()
app.get('/5270', handler5270)
app.listen(3000, () => {})
        