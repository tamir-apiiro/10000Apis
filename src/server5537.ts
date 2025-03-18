
const express = require('express')
import {handler5537} from "./handler5537";
const app = express()
app.get('/5537', handler5537)
app.listen(3000, () => {})
        