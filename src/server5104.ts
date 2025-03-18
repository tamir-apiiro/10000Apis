
const express = require('express')
import {handler5104} from "./handler5104";
const app = express()
app.get('/5104', handler5104)
app.listen(3000, () => {})
        