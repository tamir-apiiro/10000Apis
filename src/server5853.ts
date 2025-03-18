
const express = require('express')
import {handler5853} from "./handler5853";
const app = express()
app.get('/5853', handler5853)
app.listen(3000, () => {})
        