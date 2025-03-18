
const express = require('express')
import {handler5907} from "./handler5907";
const app = express()
app.get('/5907', handler5907)
app.listen(3000, () => {})
        