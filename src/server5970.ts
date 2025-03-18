
const express = require('express')
import {handler5970} from "./handler5970";
const app = express()
app.get('/5970', handler5970)
app.listen(3000, () => {})
        