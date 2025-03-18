
const express = require('express')
import {handler5066} from "./handler5066";
const app = express()
app.get('/5066', handler5066)
app.listen(3000, () => {})
        