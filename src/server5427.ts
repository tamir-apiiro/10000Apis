
const express = require('express')
import {handler5427} from "./handler5427";
const app = express()
app.get('/5427', handler5427)
app.listen(3000, () => {})
        