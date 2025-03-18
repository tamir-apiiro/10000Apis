
const express = require('express')
import {handler5308} from "./handler5308";
const app = express()
app.get('/5308', handler5308)
app.listen(3000, () => {})
        