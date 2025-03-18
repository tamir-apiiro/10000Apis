
const express = require('express')
import {handler5370} from "./handler5370";
const app = express()
app.get('/5370', handler5370)
app.listen(3000, () => {})
        