
const express = require('express')
import {handler5026} from "./handler5026";
const app = express()
app.get('/5026', handler5026)
app.listen(3000, () => {})
        