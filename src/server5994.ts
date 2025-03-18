
const express = require('express')
import {handler5994} from "./handler5994";
const app = express()
app.get('/5994', handler5994)
app.listen(3000, () => {})
        