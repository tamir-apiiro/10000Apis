
const express = require('express')
import {handler5052} from "./handler5052";
const app = express()
app.get('/5052', handler5052)
app.listen(3000, () => {})
        