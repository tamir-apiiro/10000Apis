
const express = require('express')
import {handler5521} from "./handler5521";
const app = express()
app.get('/5521', handler5521)
app.listen(3000, () => {})
        