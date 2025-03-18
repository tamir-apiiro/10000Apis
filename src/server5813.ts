
const express = require('express')
import {handler5813} from "./handler5813";
const app = express()
app.get('/5813', handler5813)
app.listen(3000, () => {})
        