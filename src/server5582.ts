
const express = require('express')
import {handler5582} from "./handler5582";
const app = express()
app.get('/5582', handler5582)
app.listen(3000, () => {})
        