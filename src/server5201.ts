
const express = require('express')
import {handler5201} from "./handler5201";
const app = express()
app.get('/5201', handler5201)
app.listen(3000, () => {})
        