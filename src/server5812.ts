
const express = require('express')
import {handler5812} from "./handler5812";
const app = express()
app.get('/5812', handler5812)
app.listen(3000, () => {})
        