
const express = require('express')
import {handler5410} from "./handler5410";
const app = express()
app.get('/5410', handler5410)
app.listen(3000, () => {})
        