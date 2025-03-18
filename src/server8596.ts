
const express = require('express')
import {handler8596} from "./handler8596";
const app = express()
app.get('/8596', handler8596)
app.listen(3000, () => {})
        