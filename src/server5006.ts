
const express = require('express')
import {handler5006} from "./handler5006";
const app = express()
app.get('/5006', handler5006)
app.listen(3000, () => {})
        