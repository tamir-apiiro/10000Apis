
const express = require('express')
import {handler5524} from "./handler5524";
const app = express()
app.get('/5524', handler5524)
app.listen(3000, () => {})
        