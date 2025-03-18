
const express = require('express')
import {handler5990} from "./handler5990";
const app = express()
app.get('/5990', handler5990)
app.listen(3000, () => {})
        