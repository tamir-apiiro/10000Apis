
const express = require('express')
import {handler5486} from "./handler5486";
const app = express()
app.get('/5486', handler5486)
app.listen(3000, () => {})
        