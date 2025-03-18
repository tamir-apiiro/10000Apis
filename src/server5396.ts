
const express = require('express')
import {handler5396} from "./handler5396";
const app = express()
app.get('/5396', handler5396)
app.listen(3000, () => {})
        