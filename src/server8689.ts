
const express = require('express')
import {handler8689} from "./handler8689";
const app = express()
app.get('/8689', handler8689)
app.listen(3000, () => {})
        