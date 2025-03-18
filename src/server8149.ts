
const express = require('express')
import {handler8149} from "./handler8149";
const app = express()
app.get('/8149', handler8149)
app.listen(3000, () => {})
        