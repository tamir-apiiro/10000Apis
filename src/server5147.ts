
const express = require('express')
import {handler5147} from "./handler5147";
const app = express()
app.get('/5147', handler5147)
app.listen(3000, () => {})
        