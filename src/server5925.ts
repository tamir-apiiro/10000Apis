
const express = require('express')
import {handler5925} from "./handler5925";
const app = express()
app.get('/5925', handler5925)
app.listen(3000, () => {})
        