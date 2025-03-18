
const express = require('express')
import {handler5442} from "./handler5442";
const app = express()
app.get('/5442', handler5442)
app.listen(3000, () => {})
        