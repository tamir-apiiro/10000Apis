
const express = require('express')
import {handler5182} from "./handler5182";
const app = express()
app.get('/5182', handler5182)
app.listen(3000, () => {})
        