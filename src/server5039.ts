
const express = require('express')
import {handler5039} from "./handler5039";
const app = express()
app.get('/5039', handler5039)
app.listen(3000, () => {})
        