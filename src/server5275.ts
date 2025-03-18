
const express = require('express')
import {handler5275} from "./handler5275";
const app = express()
app.get('/5275', handler5275)
app.listen(3000, () => {})
        