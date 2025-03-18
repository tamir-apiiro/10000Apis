
const express = require('express')
import {handler5019} from "./handler5019";
const app = express()
app.get('/5019', handler5019)
app.listen(3000, () => {})
        