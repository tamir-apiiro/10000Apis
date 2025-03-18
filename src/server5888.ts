
const express = require('express')
import {handler5888} from "./handler5888";
const app = express()
app.get('/5888', handler5888)
app.listen(3000, () => {})
        