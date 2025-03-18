
const express = require('express')
import {handler5451} from "./handler5451";
const app = express()
app.get('/5451', handler5451)
app.listen(3000, () => {})
        