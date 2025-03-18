
const express = require('express')
import {handler5117} from "./handler5117";
const app = express()
app.get('/5117', handler5117)
app.listen(3000, () => {})
        