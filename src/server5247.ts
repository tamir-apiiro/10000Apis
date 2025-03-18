
const express = require('express')
import {handler5247} from "./handler5247";
const app = express()
app.get('/5247', handler5247)
app.listen(3000, () => {})
        