
const express = require('express')
import {handler5090} from "./handler5090";
const app = express()
app.get('/5090', handler5090)
app.listen(3000, () => {})
        