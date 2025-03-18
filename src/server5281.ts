
const express = require('express')
import {handler5281} from "./handler5281";
const app = express()
app.get('/5281', handler5281)
app.listen(3000, () => {})
        