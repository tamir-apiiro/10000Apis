
const express = require('express')
import {handler5343} from "./handler5343";
const app = express()
app.get('/5343', handler5343)
app.listen(3000, () => {})
        