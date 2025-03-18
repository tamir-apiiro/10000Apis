
const express = require('express')
import {handler5446} from "./handler5446";
const app = express()
app.get('/5446', handler5446)
app.listen(3000, () => {})
        