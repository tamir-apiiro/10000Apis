
const express = require('express')
import {handler5746} from "./handler5746";
const app = express()
app.get('/5746', handler5746)
app.listen(3000, () => {})
        