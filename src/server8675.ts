
const express = require('express')
import {handler8675} from "./handler8675";
const app = express()
app.get('/8675', handler8675)
app.listen(3000, () => {})
        