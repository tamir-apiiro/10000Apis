
const express = require('express')
import {handler5558} from "./handler5558";
const app = express()
app.get('/5558', handler5558)
app.listen(3000, () => {})
        