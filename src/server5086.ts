
const express = require('express')
import {handler5086} from "./handler5086";
const app = express()
app.get('/5086', handler5086)
app.listen(3000, () => {})
        