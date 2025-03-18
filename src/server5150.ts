
const express = require('express')
import {handler5150} from "./handler5150";
const app = express()
app.get('/5150', handler5150)
app.listen(3000, () => {})
        