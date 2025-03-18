
const express = require('express')
import {handler5272} from "./handler5272";
const app = express()
app.get('/5272', handler5272)
app.listen(3000, () => {})
        