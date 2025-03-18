
const express = require('express')
import {handler8483} from "./handler8483";
const app = express()
app.get('/8483', handler8483)
app.listen(3000, () => {})
        