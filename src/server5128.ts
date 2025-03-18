
const express = require('express')
import {handler5128} from "./handler5128";
const app = express()
app.get('/5128', handler5128)
app.listen(3000, () => {})
        