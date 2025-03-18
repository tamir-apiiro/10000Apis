
const express = require('express')
import {handler5091} from "./handler5091";
const app = express()
app.get('/5091', handler5091)
app.listen(3000, () => {})
        