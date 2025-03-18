
const express = require('express')
import {handler5179} from "./handler5179";
const app = express()
app.get('/5179', handler5179)
app.listen(3000, () => {})
        