
const express = require('express')
import {handler8891} from "./handler8891";
const app = express()
app.get('/8891', handler8891)
app.listen(3000, () => {})
        