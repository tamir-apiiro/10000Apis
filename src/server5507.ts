
const express = require('express')
import {handler5507} from "./handler5507";
const app = express()
app.get('/5507', handler5507)
app.listen(3000, () => {})
        