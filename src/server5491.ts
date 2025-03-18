
const express = require('express')
import {handler5491} from "./handler5491";
const app = express()
app.get('/5491', handler5491)
app.listen(3000, () => {})
        