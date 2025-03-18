
const express = require('express')
import {handler5335} from "./handler5335";
const app = express()
app.get('/5335', handler5335)
app.listen(3000, () => {})
        