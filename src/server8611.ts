
const express = require('express')
import {handler8611} from "./handler8611";
const app = express()
app.get('/8611', handler8611)
app.listen(3000, () => {})
        