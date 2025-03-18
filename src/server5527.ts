
const express = require('express')
import {handler5527} from "./handler5527";
const app = express()
app.get('/5527', handler5527)
app.listen(3000, () => {})
        