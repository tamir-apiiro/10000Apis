
const express = require('express')
import {handler5760} from "./handler5760";
const app = express()
app.get('/5760', handler5760)
app.listen(3000, () => {})
        