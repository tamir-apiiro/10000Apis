
const express = require('express')
import {handler5119} from "./handler5119";
const app = express()
app.get('/5119', handler5119)
app.listen(3000, () => {})
        