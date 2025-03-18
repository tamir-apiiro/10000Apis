
const express = require('express')
import {handler5175} from "./handler5175";
const app = express()
app.get('/5175', handler5175)
app.listen(3000, () => {})
        