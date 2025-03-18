
const express = require('express')
import {handler5098} from "./handler5098";
const app = express()
app.get('/5098', handler5098)
app.listen(3000, () => {})
        