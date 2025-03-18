
const express = require('express')
import {handler5876} from "./handler5876";
const app = express()
app.get('/5876', handler5876)
app.listen(3000, () => {})
        