
const express = require('express')
import {handler8504} from "./handler8504";
const app = express()
app.get('/8504', handler8504)
app.listen(3000, () => {})
        