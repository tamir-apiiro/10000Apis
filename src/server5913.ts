
const express = require('express')
import {handler5913} from "./handler5913";
const app = express()
app.get('/5913', handler5913)
app.listen(3000, () => {})
        