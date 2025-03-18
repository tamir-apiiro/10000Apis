
const express = require('express')
import {handler5659} from "./handler5659";
const app = express()
app.get('/5659', handler5659)
app.listen(3000, () => {})
        