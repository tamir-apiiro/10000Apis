
const express = require('express')
import {handler5454} from "./handler5454";
const app = express()
app.get('/5454', handler5454)
app.listen(3000, () => {})
        