
const express = require('express')
import {handler5706} from "./handler5706";
const app = express()
app.get('/5706', handler5706)
app.listen(3000, () => {})
        