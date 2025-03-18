
const express = require('express')
import {handler5028} from "./handler5028";
const app = express()
app.get('/5028', handler5028)
app.listen(3000, () => {})
        