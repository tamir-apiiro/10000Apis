
const express = require('express')
import {handler5715} from "./handler5715";
const app = express()
app.get('/5715', handler5715)
app.listen(3000, () => {})
        