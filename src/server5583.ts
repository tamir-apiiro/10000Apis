
const express = require('express')
import {handler5583} from "./handler5583";
const app = express()
app.get('/5583', handler5583)
app.listen(3000, () => {})
        