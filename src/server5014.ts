
const express = require('express')
import {handler5014} from "./handler5014";
const app = express()
app.get('/5014', handler5014)
app.listen(3000, () => {})
        