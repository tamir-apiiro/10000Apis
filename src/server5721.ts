
const express = require('express')
import {handler5721} from "./handler5721";
const app = express()
app.get('/5721', handler5721)
app.listen(3000, () => {})
        