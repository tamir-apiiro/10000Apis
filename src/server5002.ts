
const express = require('express')
import {handler5002} from "./handler5002";
const app = express()
app.get('/5002', handler5002)
app.listen(3000, () => {})
        