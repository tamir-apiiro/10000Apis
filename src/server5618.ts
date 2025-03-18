
const express = require('express')
import {handler5618} from "./handler5618";
const app = express()
app.get('/5618', handler5618)
app.listen(3000, () => {})
        