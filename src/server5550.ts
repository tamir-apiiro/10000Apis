
const express = require('express')
import {handler5550} from "./handler5550";
const app = express()
app.get('/5550', handler5550)
app.listen(3000, () => {})
        