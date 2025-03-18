
const express = require('express')
import {handler5509} from "./handler5509";
const app = express()
app.get('/5509', handler5509)
app.listen(3000, () => {})
        