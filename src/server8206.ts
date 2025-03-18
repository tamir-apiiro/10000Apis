
const express = require('express')
import {handler8206} from "./handler8206";
const app = express()
app.get('/8206', handler8206)
app.listen(3000, () => {})
        