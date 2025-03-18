
const express = require('express')
import {handler3248} from "./handler3248";
const app = express()
app.get('/3248', handler3248)
app.listen(3000, () => {})
        