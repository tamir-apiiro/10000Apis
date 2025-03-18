
const express = require('express')
import {handler5963} from "./handler5963";
const app = express()
app.get('/5963', handler5963)
app.listen(3000, () => {})
        