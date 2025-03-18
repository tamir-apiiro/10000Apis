
const express = require('express')
import {handler5720} from "./handler5720";
const app = express()
app.get('/5720', handler5720)
app.listen(3000, () => {})
        