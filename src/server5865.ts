
const express = require('express')
import {handler5865} from "./handler5865";
const app = express()
app.get('/5865', handler5865)
app.listen(3000, () => {})
        