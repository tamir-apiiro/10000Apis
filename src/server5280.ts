
const express = require('express')
import {handler5280} from "./handler5280";
const app = express()
app.get('/5280', handler5280)
app.listen(3000, () => {})
        