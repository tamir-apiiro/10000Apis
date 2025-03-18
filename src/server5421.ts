
const express = require('express')
import {handler5421} from "./handler5421";
const app = express()
app.get('/5421', handler5421)
app.listen(3000, () => {})
        