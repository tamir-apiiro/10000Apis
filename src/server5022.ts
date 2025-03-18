
const express = require('express')
import {handler5022} from "./handler5022";
const app = express()
app.get('/5022', handler5022)
app.listen(3000, () => {})
        