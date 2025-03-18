
const express = require('express')
import {handler5309} from "./handler5309";
const app = express()
app.get('/5309', handler5309)
app.listen(3000, () => {})
        