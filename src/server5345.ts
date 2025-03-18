
const express = require('express')
import {handler5345} from "./handler5345";
const app = express()
app.get('/5345', handler5345)
app.listen(3000, () => {})
        