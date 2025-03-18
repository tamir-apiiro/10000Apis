
const express = require('express')
import {handler5077} from "./handler5077";
const app = express()
app.get('/5077', handler5077)
app.listen(3000, () => {})
        