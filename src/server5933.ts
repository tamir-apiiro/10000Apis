
const express = require('express')
import {handler5933} from "./handler5933";
const app = express()
app.get('/5933', handler5933)
app.listen(3000, () => {})
        