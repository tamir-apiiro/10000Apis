
const express = require('express')
import {handler8065} from "./handler8065";
const app = express()
app.get('/8065', handler8065)
app.listen(3000, () => {})
        