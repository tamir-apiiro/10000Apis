
const express = require('express')
import {handler5792} from "./handler5792";
const app = express()
app.get('/5792', handler5792)
app.listen(3000, () => {})
        