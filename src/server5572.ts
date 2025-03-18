
const express = require('express')
import {handler5572} from "./handler5572";
const app = express()
app.get('/5572', handler5572)
app.listen(3000, () => {})
        