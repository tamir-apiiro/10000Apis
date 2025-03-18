
const express = require('express')
import {handler5644} from "./handler5644";
const app = express()
app.get('/5644', handler5644)
app.listen(3000, () => {})
        