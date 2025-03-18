
const express = require('express')
import {handler5206} from "./handler5206";
const app = express()
app.get('/5206', handler5206)
app.listen(3000, () => {})
        