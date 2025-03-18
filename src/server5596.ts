
const express = require('express')
import {handler5596} from "./handler5596";
const app = express()
app.get('/5596', handler5596)
app.listen(3000, () => {})
        