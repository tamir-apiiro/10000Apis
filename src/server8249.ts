
const express = require('express')
import {handler8249} from "./handler8249";
const app = express()
app.get('/8249', handler8249)
app.listen(3000, () => {})
        