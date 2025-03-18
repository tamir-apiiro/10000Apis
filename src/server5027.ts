
const express = require('express')
import {handler5027} from "./handler5027";
const app = express()
app.get('/5027', handler5027)
app.listen(3000, () => {})
        