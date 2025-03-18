
const express = require('express')
import {handler8706} from "./handler8706";
const app = express()
app.get('/8706', handler8706)
app.listen(3000, () => {})
        