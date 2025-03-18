
const express = require('express')
import {handler5689} from "./handler5689";
const app = express()
app.get('/5689', handler5689)
app.listen(3000, () => {})
        