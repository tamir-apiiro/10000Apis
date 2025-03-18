
const express = require('express')
import {handler8564} from "./handler8564";
const app = express()
app.get('/8564', handler8564)
app.listen(3000, () => {})
        