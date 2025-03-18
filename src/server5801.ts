
const express = require('express')
import {handler5801} from "./handler5801";
const app = express()
app.get('/5801', handler5801)
app.listen(3000, () => {})
        