
const express = require('express')
import {handler5423} from "./handler5423";
const app = express()
app.get('/5423', handler5423)
app.listen(3000, () => {})
        