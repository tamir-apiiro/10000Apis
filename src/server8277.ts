
const express = require('express')
import {handler8277} from "./handler8277";
const app = express()
app.get('/8277', handler8277)
app.listen(3000, () => {})
        