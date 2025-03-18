
const express = require('express')
import {handler8576} from "./handler8576";
const app = express()
app.get('/8576', handler8576)
app.listen(3000, () => {})
        