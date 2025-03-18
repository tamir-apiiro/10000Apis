
const express = require('express')
import {handler5611} from "./handler5611";
const app = express()
app.get('/5611', handler5611)
app.listen(3000, () => {})
        