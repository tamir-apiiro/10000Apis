
const express = require('express')
import {handler5127} from "./handler5127";
const app = express()
app.get('/5127', handler5127)
app.listen(3000, () => {})
        