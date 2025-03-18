
const express = require('express')
import {handler5234} from "./handler5234";
const app = express()
app.get('/5234', handler5234)
app.listen(3000, () => {})
        