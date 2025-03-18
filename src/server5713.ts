
const express = require('express')
import {handler5713} from "./handler5713";
const app = express()
app.get('/5713', handler5713)
app.listen(3000, () => {})
        