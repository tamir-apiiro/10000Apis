
const express = require('express')
import {handler8050} from "./handler8050";
const app = express()
app.get('/8050', handler8050)
app.listen(3000, () => {})
        