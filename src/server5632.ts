
const express = require('express')
import {handler5632} from "./handler5632";
const app = express()
app.get('/5632', handler5632)
app.listen(3000, () => {})
        