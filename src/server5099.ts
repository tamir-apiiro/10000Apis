
const express = require('express')
import {handler5099} from "./handler5099";
const app = express()
app.get('/5099', handler5099)
app.listen(3000, () => {})
        