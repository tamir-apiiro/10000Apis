
const express = require('express')
import {handler8895} from "./handler8895";
const app = express()
app.get('/8895', handler8895)
app.listen(3000, () => {})
        