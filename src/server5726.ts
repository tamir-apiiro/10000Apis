
const express = require('express')
import {handler5726} from "./handler5726";
const app = express()
app.get('/5726', handler5726)
app.listen(3000, () => {})
        