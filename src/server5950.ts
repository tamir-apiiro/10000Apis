
const express = require('express')
import {handler5950} from "./handler5950";
const app = express()
app.get('/5950', handler5950)
app.listen(3000, () => {})
        