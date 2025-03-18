
const express = require('express')
import {handler5961} from "./handler5961";
const app = express()
app.get('/5961', handler5961)
app.listen(3000, () => {})
        