
const express = require('express')
import {handler5844} from "./handler5844";
const app = express()
app.get('/5844', handler5844)
app.listen(3000, () => {})
        