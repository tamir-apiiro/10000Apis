
const express = require('express')
import {handler5872} from "./handler5872";
const app = express()
app.get('/5872', handler5872)
app.listen(3000, () => {})
        