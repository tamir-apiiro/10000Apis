
const express = require('express')
import {handler5125} from "./handler5125";
const app = express()
app.get('/5125', handler5125)
app.listen(3000, () => {})
        