
const express = require('express')
import {handler5001} from "./handler5001";
const app = express()
app.get('/5001', handler5001)
app.listen(3000, () => {})
        