
const express = require('express')
import {handler5951} from "./handler5951";
const app = express()
app.get('/5951', handler5951)
app.listen(3000, () => {})
        