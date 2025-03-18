
const express = require('express')
import {handler8647} from "./handler8647";
const app = express()
app.get('/8647', handler8647)
app.listen(3000, () => {})
        