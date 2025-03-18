
const express = require('express')
import {handler5144} from "./handler5144";
const app = express()
app.get('/5144', handler5144)
app.listen(3000, () => {})
        