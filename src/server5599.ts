
const express = require('express')
import {handler5599} from "./handler5599";
const app = express()
app.get('/5599', handler5599)
app.listen(3000, () => {})
        