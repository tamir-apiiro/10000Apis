
const express = require('express')
import {handler5388} from "./handler5388";
const app = express()
app.get('/5388', handler5388)
app.listen(3000, () => {})
        