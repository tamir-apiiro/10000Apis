
const express = require('express')
import {handler5209} from "./handler5209";
const app = express()
app.get('/5209', handler5209)
app.listen(3000, () => {})
        