
const express = require('express')
import {handler5386} from "./handler5386";
const app = express()
app.get('/5386', handler5386)
app.listen(3000, () => {})
        