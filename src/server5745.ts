
const express = require('express')
import {handler5745} from "./handler5745";
const app = express()
app.get('/5745', handler5745)
app.listen(3000, () => {})
        