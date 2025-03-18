
const express = require('express')
import {handler5445} from "./handler5445";
const app = express()
app.get('/5445', handler5445)
app.listen(3000, () => {})
        