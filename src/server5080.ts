
const express = require('express')
import {handler5080} from "./handler5080";
const app = express()
app.get('/5080', handler5080)
app.listen(3000, () => {})
        