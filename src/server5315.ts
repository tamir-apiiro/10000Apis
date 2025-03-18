
const express = require('express')
import {handler5315} from "./handler5315";
const app = express()
app.get('/5315', handler5315)
app.listen(3000, () => {})
        