
const express = require('express')
import {handler8200} from "./handler8200";
const app = express()
app.get('/8200', handler8200)
app.listen(3000, () => {})
        