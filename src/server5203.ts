
const express = require('express')
import {handler5203} from "./handler5203";
const app = express()
app.get('/5203', handler5203)
app.listen(3000, () => {})
        