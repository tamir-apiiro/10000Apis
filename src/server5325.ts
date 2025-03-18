
const express = require('express')
import {handler5325} from "./handler5325";
const app = express()
app.get('/5325', handler5325)
app.listen(3000, () => {})
        