
const express = require('express')
import {handler5089} from "./handler5089";
const app = express()
app.get('/5089', handler5089)
app.listen(3000, () => {})
        