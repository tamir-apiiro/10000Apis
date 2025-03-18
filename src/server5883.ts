
const express = require('express')
import {handler5883} from "./handler5883";
const app = express()
app.get('/5883', handler5883)
app.listen(3000, () => {})
        