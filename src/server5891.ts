
const express = require('express')
import {handler5891} from "./handler5891";
const app = express()
app.get('/5891', handler5891)
app.listen(3000, () => {})
        