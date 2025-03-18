
const express = require('express')
import {handler5217} from "./handler5217";
const app = express()
app.get('/5217', handler5217)
app.listen(3000, () => {})
        