
const express = require('express')
import {handler5376} from "./handler5376";
const app = express()
app.get('/5376', handler5376)
app.listen(3000, () => {})
        