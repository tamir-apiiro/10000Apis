
const express = require('express')
import {handler5576} from "./handler5576";
const app = express()
app.get('/5576', handler5576)
app.listen(3000, () => {})
        