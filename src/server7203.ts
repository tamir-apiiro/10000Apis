
const express = require('express')
import {handler7203} from "./handler7203";
const app = express()
app.get('/7203', handler7203)
app.listen(3000, () => {})
        