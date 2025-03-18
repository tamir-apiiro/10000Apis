
const express = require('express')
import {handler5065} from "./handler5065";
const app = express()
app.get('/5065', handler5065)
app.listen(3000, () => {})
        