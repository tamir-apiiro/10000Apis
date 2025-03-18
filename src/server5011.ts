
const express = require('express')
import {handler5011} from "./handler5011";
const app = express()
app.get('/5011', handler5011)
app.listen(3000, () => {})
        