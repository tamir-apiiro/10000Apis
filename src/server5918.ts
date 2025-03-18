
const express = require('express')
import {handler5918} from "./handler5918";
const app = express()
app.get('/5918', handler5918)
app.listen(3000, () => {})
        