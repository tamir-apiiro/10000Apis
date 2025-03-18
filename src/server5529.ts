
const express = require('express')
import {handler5529} from "./handler5529";
const app = express()
app.get('/5529', handler5529)
app.listen(3000, () => {})
        