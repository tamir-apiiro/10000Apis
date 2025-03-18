
const express = require('express')
import {handler8490} from "./handler8490";
const app = express()
app.get('/8490', handler8490)
app.listen(3000, () => {})
        