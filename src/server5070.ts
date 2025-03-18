
const express = require('express')
import {handler5070} from "./handler5070";
const app = express()
app.get('/5070', handler5070)
app.listen(3000, () => {})
        