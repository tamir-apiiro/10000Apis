
const express = require('express')
import {handler5676} from "./handler5676";
const app = express()
app.get('/5676', handler5676)
app.listen(3000, () => {})
        